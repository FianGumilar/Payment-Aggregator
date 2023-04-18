import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';


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

    // public async updateProfile({ uuid }, updateDto): Promise<User | null | 401 | 406> {
    //     let user = await this.
    // }
}
