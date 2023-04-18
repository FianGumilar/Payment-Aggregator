import { 
    Body,
    Controller, 
    HttpCode, 
    Post, 
    Request,
    UseGuards,
    UsePipes } from '@nestjs/common';
import { LoginService } from './login.service';
import { JoiValidationPipe } from 'src/common/utils/validation.pipe';
import { LoginUserDto } from 'src/interfaces/login.user.dto';
import { loginValidationSchema } from 'src/users/users.schema';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtDto } from 'src/interfaces/jwt.dto';
import { LocalGuard } from '../guards/local.guard';

@Controller()
export class LoginController {
    constructor(
        private readonly loginService: LoginService
    ) {}

    @Post('/login')
    @ApiTags('Authentication')
    @ApiOperation({
        description: 'JWT login endpoint',
    })
    @ApiResponse({
        status: 200,
        description: 'User has been logged in',
        type: JwtDto
    })
    @ApiResponse({
        status: 400,
        description: 'Validation failed',
      })
    @ApiResponse({
        status: 401,
        description: 'Invalid credentials',
      })
    @ApiResponse({
        status: 404,
        description: 'User not found',
      })
    @ApiResponse({
        status: 406,
        description: 'Email is not confirmed',
      })
    @HttpCode(200)
    @UseGuards(LocalGuard)
    @UsePipes(new JoiValidationPipe(loginValidationSchema))
    async login(
        @Request() req,
        @Body() loginUser: LoginUserDto) {
        return this.loginService.login(req.user)
    }
}
