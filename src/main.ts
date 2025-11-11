import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'


async function bootstrap() {
const app = await NestFactory.create(AppModule)
app.enableCors()
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))


const config = new DocumentBuilder().setTitle('CloudSys API').setVersion('1.0').addBearerAuth().build()
const doc = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('docs', app, doc)


const port = process.env.PORT || 3000
await app.listen(port)
}


if (process.env.NODE_ENV !== 'production') bootstrap()
export default bootstrap