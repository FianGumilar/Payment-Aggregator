import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { PassportStrategy } from '@nestjs/passport';
  import { Strategy } from 'passport-local';
  import { LoginService } from '../login/login.service';
import { LoginUserDto } from 'src/interfaces/login.user.dto';
  
  @Injectable()
  export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly loginService: LoginService) {
      super({ usernameField: 'email' });
    }
  
    async validate(email: string, password: string): Promise<any> {
    const user = await this.loginService.validateUser(email, password);
        // if(!user) {
        //     throw new HttpException('Password is incorrect', HttpStatus.UNAUTHORIZED)
        // }
        // if(user.password !== password) {
        //     throw new HttpException('User not Found', HttpStatus.NOT_FOUND);
        // }
        // if(user.email !== email) {
        //     throw new HttpException('Please confirm your email address to complete the registration', HttpStatus.NOT_ACCEPTABLE)
        // }
        //   return user;
    if(user) {
        return user;
    } else {
        throw new UnauthorizedException()
    }
    }
  }
  