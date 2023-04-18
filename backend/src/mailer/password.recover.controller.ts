import { Controller, Post, UsePipes, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { JoiValidationPipe } from 'src/common/utils/validation.pipe';
import { RecoverDto } from 'src/interfaces/recover.dto';
import { PasswordRecoverSchema } from './schema/password.recover.schema';

@Controller()
export class PasswordRecoverController {
    constructor(private readonly mailerService: MailerService) {}

    @Post()
    @UsePipes(new JoiValidationPipe(PasswordRecoverSchema))
    async change(@Body() recoverDto: RecoverDto) {
        await this.mailerService.sendRecoverMessage(recoverDto.email)
    }

}
