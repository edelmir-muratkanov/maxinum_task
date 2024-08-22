import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export function JwtConfigFactory(
  configService: ConfigService,
): JwtModuleOptions {
  return {
    secret: configService.get('JWT_SECRET'),
  }
}
