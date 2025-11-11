// src/main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'

const server = express()

async function createServer() {
  // Create Nest on top of a shared Express instance
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server))
  app.enableCors()

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('CloudSys API')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
    customSiteTitle: 'CloudSys API Docs',
  })

  // Helpful redirect: /docs -> /docs/
  server.get('/docs', (_req, res) => res.redirect('/docs/'))

  // IMPORTANT for serverless: no app.listen(); just init and return the Express handler
  await app.init()
  return server
}

// Vercel expects default export to be the request handler
export default createServer()
