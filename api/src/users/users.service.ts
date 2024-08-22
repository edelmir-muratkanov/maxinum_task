import { ConflictException, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { genSalt, hash } from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    })
  }

  async getById(id: string) {
    return this.userRepository.findOne({
      where: { id },
    })
  }

  async create(email: string, password: string) {
    if (await this.getByEmail(email)) {
      throw new ConflictException('Пользователь с таким email уже существует')
    }

    /** Лучшим решением было бы вынести в отдельный сервис для пароля */
    const salt = await genSalt(100)
    const hashedPassword = await hash(password, salt)

    const user = this.userRepository.create({
      email,
      password: hashedPassword,
    })

    return await this.userRepository.save(user)
  }
}
