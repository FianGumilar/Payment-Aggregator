import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hashedEmail } from 'src/common/utils/bcrypt';
import * as bcrypt from 'bcrypt';
const nodemailer = require('nodemailer');
import config from '../common/utils/config';
import { confirmMail } from './template/confirm.mail.html';
import { resetPassword } from './template/reset.passowrd.html';
import { resolve } from 'path';


@Injectable()
export class MailerService {
    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get('SMPTP_HOST'),
            port: this.configService.get('SMPTP_PORT'),
            secure: this.configService.get('SMPTP_SECURE'),
            auth: {
                user: this.configService.get('SMPTP_USER'),
                pass: this.configService.get('SMPTP_PASSWORD')
            }
        })
    }
    private transporter;

    private logger = new Logger('MailerService');
    // public confirm(token, email) {
    //     const hash = hashedEmail(email)
    //     return token === hash
    // }
    public confirm(token, email) {
        const hash = hashedEmail(email)
        return bcrypt.compareSync(token, hash)
    }

    public async sendResetPassword(email): Promise<boolean> {
        const hash = hashedEmail(email)
        const ButtonLink = 
            this.configService.get('RESET_PASSWORD') + `?token=${hash}&email=${email}`;
        console.log(ButtonLink);

        const mail = resetPassword
        .replace(new RegExp('--ProjectName--', 'g'), config.project.name)
        .replace(new RegExp('--ProjectAddress--', 'g'), config.project.address)
        .replace(new RegExp('--ProjectLogo--', 'g'), config.project.logoUrl)
        .replace(new RegExp('--ProjectSlogan--', 'g'), config.project.slogan)
        .replace(new RegExp('--ProjectColor--', 'g'), config.project.color)
        .replace(new RegExp('--ProjectLink--', 'g'), config.project.url)
        .replace(new RegExp('--ButtonLink--', 'g'), ButtonLink);

        // const mailOptions = await this.transporter.sendMail({
        //     from: this.configService.get('SMTP_SENDER'),
        //     to: email,
        //     subject: 'Password Recovery',
        //     html: `
        //     <p>You have requested password recovery for instagig.
        //     Please follow <a href=${link}>this link</a> 
        //     to set a new password.</p>
        //     `,
        // })

        const mailOptions = {
            from: this.configService.get('SMPTP_SENDER'),
            to: email,
            subject: `Reset Your ${config.project.name} Account's Password`,
            hmtm: mail
        }
        return new Promise<boolean>((resolve) =>
        this.transporter.sendMail(mailOptions, async (error) => {
          if (error) {
            this.logger.warn(
              'Mail sending failed, check your service credentials.',
            );
            resolve(false);
          }
          resolve(true);
        }),
    );
}

    public async sendEmailConfirm(user): Promise<boolean> {
        const hash = hashedEmail(user.email)
        const ButtonLink = 
            this.configService.get('MAIL_VERIFICATION_URL') + `?token=${hash}&email=${user.email}`;
        console.log(ButtonLink);

        const mail = confirmMail
        .replace(new RegExp('--PersonName--', 'g'), user.name)
        .replace(new RegExp('--ProjectName--', 'g'), config.project.name)
        .replace(new RegExp('--ProjectAddress--', 'g'), config.project.address) 
        .replace(new RegExp('--ProjectLogo--', 'g'), config.project.logoUrl)
        .replace(new RegExp('--ProjectSlogan--', 'g'), config.project.slogan)
        .replace(new RegExp('--ProjectColor--', 'g'), config.project.color)
        .replace(new RegExp('--ProjectLink--', 'g'), config.project.url)
        .replace(new RegExp('--ButtonLink--', 'g'), ButtonLink)

        const mailOptions= {
            from: this.configService.get('SMPTP_SENDER'),
            to: user.email,
            subject: `Welcome to ${config.project.name} ${user.name}! Confirm Your Email`,
            html: mail,
        }

        return new Promise<boolean>((resolve) => 
            this.transporter.sendMail(mailOptions, async(error) => {
                if(error) {
                    this.logger.warn(
                        "Mail sending failed, check your service credentials"
                    );
                    resolve(false);
                }
                resolve(false);
            })
        )
    }

    public async sendRecoverMessage(email): Promise<void> {
        const hash = hashedEmail(email);
        const link =
          this.configService.get('RECOVER_LINK') +
          `?token=${hash}&email=${email}`;
        console.log(link);
        const info = await this.transporter.sendMail({
          from: this.configService.get('SMTP_SENDER'),
          to: email,
          subject: 'Instagig password recovery',
          html: `
          <p>You have requested password recovery for instagig.
          Please follow <a href=${link}>this link</a> 
          to set a new password.</p>
          `,
        });
        console.log(info);
      }
}

