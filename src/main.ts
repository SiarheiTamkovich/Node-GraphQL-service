import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { startApolloServer } from './modules/apollo.server'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  console.log('Server started on localhost: 4000');
  //  startApolloServer();
}
bootstrap();
