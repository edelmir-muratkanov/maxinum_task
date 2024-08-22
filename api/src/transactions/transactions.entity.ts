import { User } from 'src/users/users.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { TransactionCategory } from './transaction-category.entity'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, user => user.transactions)
  author: User

  @ManyToOne(() => TransactionCategory, category => category.transactions)
  category: TransactionCategory

  @Column({ type: 'money' })
  amount: number

  @Column({ type: 'text', default: '' })
  comment: string

  @Column({ type: 'date' })
  date: Date
}
