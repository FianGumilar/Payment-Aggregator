import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { encodePassword } from 'src/common/utils/bcrypt';


@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {
        super(usersRepository)
    }

    // public async findByUuid(uuid: string): Promise<User | undefined> {
    //     return await this.usersRepository.findOneBy({ uuid })
    // }

    public async findByEmail(email: string): Promise<User | undefined> {
        return await this.usersRepository.findOneBy({ email });
    }

    public async saveUser(user): Promise<User | undefined> {
        return await this.usersRepository.save(user);
    }

    public async changePassword(
        user_id: string,
        newPassword: string
    ): Promise<void> {
        const user =  await this.usersRepository.findOneBy({user_id}) 
        if(!user) {
            throw new NotFoundException('User not found')
        }
        const hashPassword = encodePassword(newPassword);
        user.password = hashPassword;

        await this.usersRepository.save(user);
    }

    public async findByUserId(user_id: string): Promise<User | undefined> {
        return await this.usersRepository.findOneBy({ user_id });
    }


    // public async updateProfile({ uuid }, updateDto): Promise<User | null | 401 | 406> {
    //     let user = await this.
    // }
}
