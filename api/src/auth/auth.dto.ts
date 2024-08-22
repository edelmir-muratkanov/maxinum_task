import { OmitType } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'
import { User } from 'src/users/users.entity'

/** В некоторых случаях лучше разделить dto для регистрации и аутентификации */
/** Документация для swagger автоматически генерируется в nest-cli.json */
export class AuthRequest {
  @IsEmail({}, { message: 'Неправильный формат почты' })
  email: string

  @IsString()
  @MinLength(6, { message: 'Минимальная длина пароля 6 символов' })
  password: string
}

export class AuthResponse extends OmitType(User, [
  'password',
  'transactions',
  'categories',
]) {
  accessToken: string
}
