import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'
import { User } from 'src/users/users.entity'

const callback = (
  data: keyof Omit<User, 'password'>,
  ctx: ExecutionContext,
) => {
  const request = ctx.switchToHttp().getRequest()

  if (!request || !request.user) {
    throw new UnauthorizedException()
  }

  const { user } = request

  if (data && !user[data]) {
    throw new UnauthorizedException()
  }

  return data ? user[data] : user
}

export const CurrentUser = createParamDecorator(callback)
