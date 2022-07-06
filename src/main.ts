import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
//import { startApolloServer } from './modules/apollo.server'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
    }),
  );
  await app.listen(4000);
  console.log('Server started on localhost: 4000');
  //startApolloServer();
}
bootstrap();
