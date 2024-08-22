import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Transaction } from './transactions.entity'
import { Repository } from 'typeorm'
import { TransactionCategory } from './transaction-category.entity'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class TransactionsService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(TransactionCategory)
    private readonly transactionCategoryRepository: Repository<TransactionCategory>,
  ) {}

  async getCategories(userId: string, page?: number, size?: number) {
    let pagination = {}

    if (page && size) {
      pagination = {
        skip: page * size,
        take: size,
      }
    }

    return await this.transactionCategoryRepository.find({ ...pagination })
  }

  async createTransaction(
    userId: string,
    categoryName: string,
    amount: number,
    date: Date,
    comment = '',
  ) {
    const user = await this.userService.getById(userId)
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    let category = await this.transactionCategoryRepository.findOne({
      where: { name: categoryName },
    })

    if (!category) {
      category = this.transactionCategoryRepository.create({
        name: categoryName,
        author: user,
      })

      await this.transactionCategoryRepository.save(category)
    }

    const transaction = this.transactionRepository.create({
      author: user,
      category: category,
      amount,
      comment,
      date,
    })

    return await this.transactionRepository.save(transaction)
  }

  async getTransactions(userId: string, page?: number, size?: number) {
    let pagination = {}

    if (page && size) {
      pagination = {
        skip: page * size,
        take: size,
      }
    }

    return await this.transactionRepository.find({
      where: {
        author: {
          id: userId,
        },
      },
      relations: {
        category: true,
      },
      ...pagination,
    })
  }
}
