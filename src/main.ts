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
      transform: true, // Habilita la transformación automática de los parámetros de la solicitud a su tipo definido en el DTO (Data Transfer Object) mediante el uso de decoradores como @Body(), @Query(), etc.
      transformOptions: {
        // Habilita la conversión implícita, lo que significa que NestJS intentará realizar conversiones automáticas entre diferentes tipos cuando sea posible.
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();
