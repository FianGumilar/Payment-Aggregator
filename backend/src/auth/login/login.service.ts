import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';
import { createHash } from 'crypto';
import { LoginUserDto } from 'src/interfaces/login.user.dto';
import { comparePassword } from 'src/common/utils/bcrypt';
@Injectable()
export class LoginService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,

    ) {}

    public async validateUser(email: string, password: string): Promise<User> {
        const user = await this.usersService.findByEmail(email);
        if(!user) {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
        // const hash = createHash('sha256').update(password).digest('hex')
        const hash = comparePassword(password, user.password);
        if (hash) {
            return user;
        } else {
            throw new HttpException('User Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    }

    public async login(user: User) {
        return {
            access_token: this.jwtService.sign({ sub: user })
        }
    }
}
