import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './db.module';
import { RegisterModule } from './auth/register/register.module';
import { RegisterService } from './auth/register/register.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './auth/login/login.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      })
    }),
    DatabaseModule,
    RegisterModule,
    LoginModule,
    UsersModule,
    MailerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
