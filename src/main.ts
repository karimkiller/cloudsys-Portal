// src/main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const isVercel = !!process.env.VERCEL || !!process.env.NOW_REGION

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  if (isVercel) {
    // On Vercel serverless: DO NOT listen on a port.
    await app.init()
    return app
  }

  // Local/dev: run the HTTP server normally
  const port = process.env.PORT ? Number(process.env.PORT) : 3000
  await app.listen(port)
  return app
}

// The @vercel/nestjs builder looks for a default export.
export default bootstrap()
