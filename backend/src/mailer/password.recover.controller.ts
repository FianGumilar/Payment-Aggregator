import { Controller, Post, UsePipes, Body, Patch, Req, Res, HttpStatus, HttpException } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { JoiValidationPipe } from 'src/common/utils/validation.pipe';
import { PasswordRecoverSchema } from './schema/password.recover.schema';
import { ResetPasswordRequest } from 'src/interfaces/reset-password';
import { UsersService } from 'src/users/users.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ChangePasswordDto } from 'src/interfaces/change-password.dto';
import { User } from 'src/users/users.entity';

@Controller()
export class PasswordRecoverController {
    constructor(
        private readonly mailerService: MailerService,
        private readonly usersService: UsersService,
        ) {}

    @Post('/reset-password')
    @ApiTags('Authentication')
    @ApiOperation({ description: 'Send recover password email message' })
    @ApiResponse({
      status: 201,
      description: 'OK, recover message sent',
    })
    @ApiResponse({
      status: 400,
      description: 'Email validation failed',
    })
    @UsePipes(new JoiValidationPipe(PasswordRecoverSchema))
    async resetPassword(@Body() resetPasswordRequest: ResetPasswordRequest) {
        await this.mailerService.sendResetPassword(resetPasswordRequest.email)
    }

    @Patch('change-password')
    async changePassword(
    @Body() { newPassword } : ChangePasswordDto,
    @Req() user: User,
    @Res() response
    ): Promise<void> {
      try {
        await this.usersService.changePassword(user.user_id, newPassword);
        response.redirect('http://localhost:3000/login');
        console.log('Success change password')
      } catch (err) {
          throw new HttpException('Failed to update password', HttpStatus.BAD_REQUEST)
      }
    }

}
