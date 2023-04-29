import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { RegisterModule } from './auth/register/register.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './auth/login/login.module';
import { MailerModule } from './mailer/mailer.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  const configService = app.get(ConfigService);
  const port = +configService.get('PORT')

  const config = new DocumentBuilder()
      .setTitle('Payment-Aggregator')
      .setDescription('internal API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
  const options: SwaggerDocumentOptions = {
      include: [
        AppModule,
        RegisterModule,
        LoginModule,
        UsersModule,
        MailerModule
      ]
    }
  const setupOptions = {
      customSiteTitle: 'API Docs'
  }

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api/v1', app, document, setupOptions);

  await app.listen(port);
}
bootstrap();
