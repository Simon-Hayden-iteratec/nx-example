/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // all routes should reside under /api
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  // globally enable validation
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 3333;

  // Setup swagger-ui
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    // Don't forget to use the globalPrefix, otherwise routes are incorrect
    .setBasePath(globalPrefix)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // Swagger should be reachable via /api/docs
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
