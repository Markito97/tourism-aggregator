import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      credentials: true,
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
    await app.listen(3001);
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
