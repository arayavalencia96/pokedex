import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve los parámetros no incluidos en el DTO.
      forbidNonWhitelisted: true, // Retorna error si hay parámetros que no deben estar.
    }),
  );
  await app.listen(3000);
}
bootstrap();
