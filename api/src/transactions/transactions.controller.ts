import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { TransactionsService } from './transactions.service'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { TransactionRequest } from './transaction.dto'

@ApiBearerAuth()
@Auth()
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/categories')
  async getCategories(
    @CurrentUser('id') userId: string,
    @Param('page') page?: number,
    @Param('size') size?: number,
  ) {
    return await this.transactionsService.getCategories(userId, page, size)
  }

  @Get()
  async getTransactions(
    @CurrentUser('id') userId: string,
    @Param('page') page?: number,
    @Param('size') size?: number,
  ) {
    return await this.transactionsService.getTransactions(userId, page, size)
  }

  @Post()
  async createTransaction(
    @Body() dto: TransactionRequest,
    @CurrentUser('id') userId: string,
  ) {
    return await this.transactionsService.createTransaction(
      userId,
      dto.categoryName,
      dto.amount,
      dto.date,
    )
  }
}
