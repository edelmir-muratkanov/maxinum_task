import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service'
import { AuthResponse } from './auth.dto'
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async register(email: string, password: string): Promise<AuthResponse> {
    const user = await this.userService.create(email, password)

    return {
      id: user.id,
      email: user.email,
      accessToken: await this.issueAccessToken(user.id),
    }
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const user = await this.userService.getByEmail(email)

    if (!user) {
      throw new NotFoundException('Пользователь с таким email не найден')
    }

    /** Лучшим решением было бы вынести в отдельный сервис для пароля */
    const isValidPassword = await compare(password, user.password)
    if (!isValidPassword) {
      throw new UnauthorizedException()
    }

    return {
      id: user.id,
      email: user.email,
      accessToken: await this.issueAccessToken(user.id),
    }
  }

  private async issueAccessToken(id: string) {
    return this.jwtService.signAsync({ id }, { expiresIn: '7d' })
  }
}
