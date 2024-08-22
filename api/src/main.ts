import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const logger = new Logger('Bootstrap')
  const port = process.env.SERVER_PORT ?? 5000
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  await app.listen(port, async () =>
    logger.log(`Application started at ${await app.getUrl()}`),
  )
}
bootstrap()
