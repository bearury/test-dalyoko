import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3030;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  await app.listen(port);
}
bootstrap()
  .then(() => {
    console.info(`Server is running on port ${port}`);
  })
  .catch((err) => {
    console.error('Server is not running, error: ', err);
  });
