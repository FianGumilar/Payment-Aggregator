import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { PasswordRecoverController } from './password.recover.controller';
import { ConfirmController } from './confirm.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ConfigModule, UsersModule],
  providers: [MailerService, ConfigService],
  controllers: [PasswordRecoverController, ConfirmController],
  exports: [MailerService]
})
export class MailerModule {}
