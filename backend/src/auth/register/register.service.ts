import { Injectable } from '@nestjs/common';
import { encodePassword } from 'src/common/utils/bcrypt';
import { RegisterUserDto } from 'src/interfaces/register.user.dto';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { MailerService } from 'src/mailer/mailer.service';  
import { createHash } from 'crypto';

@Injectable()
export class RegisterService {
    constructor(
        private readonly usersService: UsersService,
        private readonly mailerService: MailerService
    ) {}
    public async createUser(userDto: RegisterUserDto): Promise<User | null> {
        const { name, bussiness_name, email, password ,phone } = userDto;
        if (await this.usersService.findByEmail(email)) {
          return null;
        } else {
          const user = await this.usersService.saveUser({
            ...userDto,
            password: encodePassword(password)
            // password: createHash('sha256').update(password).digest('hex'),
          });
          await this.mailerService.sendEmailConfirm(user);
          return user;
        }
      }
}
