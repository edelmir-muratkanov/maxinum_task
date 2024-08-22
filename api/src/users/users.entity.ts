import { TransactionCategory } from 'src/transactions/transaction-category.entity'
import { Transaction } from 'src/transactions/transactions.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => Transaction, transaction => transaction.author)
  transactions: Transaction[]

  @OneToMany(() => TransactionCategory, category => category.author)
  categories: TransactionCategory[]
}
