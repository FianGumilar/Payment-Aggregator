import { Get, Controller, HttpException, HttpStatus, Query, Res } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { UsersService } from 'src/users/users.service';
import { ConfirmEmailDto } from 'src/interfaces/confirm.email.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class ConfirmController {
    constructor(
        private readonly mailerService: MailerService,
        private readonly usersService: UsersService
    ) {}
    @Get('/email-confirm')
    @ApiTags('Authentication')
    @ApiOperation({ description: 'Email confirmation endpoint'})
    @ApiResponse({
        status: 200,
        description: 'Email confirmed',
    })
    @ApiResponse({
        status: 401,
        description: 'Token is  invalid'
    })
    async confirmEmail(
        @Query() { token, email }: ConfirmEmailDto ,
        @Res() response,
    ) {
        if(await this.mailerService.confirmEmail(token, email)) {
            const user = await this.usersService.findByEmail(email)
            await this.usersService.saveUser({
                user_id: user.user_id,
                emailConfirmed: true,
            })
            response.redirect('http://localhost:3000/login');
            console.log("Email success confirmed")
        } else {
            throw new HttpException('Token is invalid', HttpStatus.UNAUTHORIZED)
        }
    }
}
