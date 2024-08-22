import { Module } from '@nestjs/common'
import { TransactionsService } from './transactions.service'
import { TransactionsController } from './transactions.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Transaction } from './transactions.entity'
import { TransactionCategory } from './transaction-category.entity'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, TransactionCategory]),
    UsersModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
