import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';  
import { RegisterController } from './register.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { RegisterService } from './register.service';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from '../login/login.service';
import { UsersService } from 'src/users/users.service';
import { LoginModule } from '../login/login.module';
import { MailerModule } from 'src/mailer/mailer.module';
import { MailerService } from 'src/mailer/mailer.service';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    LoginModule,
    MailerModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '84600s' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    RegisterService,
    LoginService,
    UsersService,
    MailerService,
    ConfigService,
  ],
  controllers: [RegisterController],
  exports: []
})
export class RegisterModule {}
