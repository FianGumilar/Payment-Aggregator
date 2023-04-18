import { Controller, Post, UsePipes, Body, HttpException, HttpCode } from '@nestjs/common';
import { RegisterService } from './register.service';
import { JoiValidationPipe } from 'src/common/utils/validation.pipe';
import { createUserValidationSchema } from 'src/users/users.schema';
import { RegisterUserDto } from 'src/interfaces/register.user.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';  

@Controller()
export class RegisterController {
    constructor(
        private readonly registerService: RegisterService
    ) {}
    @Post('/register')
    @ApiTags('Authentication')
    @ApiOperation({ description: 'Register user' })
    @ApiResponse({
      status: 201,
      description: 'User has been successfully created, and logged in',
    })
    @ApiResponse({
      status: 406,
      description: 'Email already exists',
    })
    @ApiResponse({
      status: 400,
      description: 'Validation failed',
    })
    @HttpCode(201)
    @UsePipes(new JoiValidationPipe(createUserValidationSchema))
    async register(@Body() regiterUserDto: RegisterUserDto) {
        const user = await this.registerService.createUser(regiterUserDto)
        if(user) {
            return user;
        } else {
            throw new HttpException('Email already exists', 406)
        }
    }
}
