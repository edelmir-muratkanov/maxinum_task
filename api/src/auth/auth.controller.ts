import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthRequest, AuthResponse } from './auth.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto: AuthRequest): Promise<AuthResponse> {
    return this.authService.login(dto.email, dto.password)
  }

  @Post('register')
  register(@Body() dto: AuthRequest): Promise<AuthResponse> {
    return this.authService.register(dto.email, dto.password)
  }
}
