// src/main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

let server: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  // Swagger at /docs
  const config = new DocumentBuilder()
    .setTitle('CloudSys API')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  // IMPORTANT: on Vercel DO NOT listen; just init and return the Express handler
  await app.init()
  return app.getHttpAdapter().getInstance()
}

// @vercel/nestjs expects the default export to be a request handler
export default (async () => (server ??= await bootstrap()))()
