import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule ,TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    ConfigService,

  ],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
