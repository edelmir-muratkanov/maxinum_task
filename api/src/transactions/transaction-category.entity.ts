import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Transaction } from './transactions.entity'
import { User } from 'src/users/users.entity'

@Entity()
export class TransactionCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  name: string

  @OneToMany(() => Transaction, transaction => transaction.category)
  transactions: Transaction[]

  @ManyToOne(() => User, user => user.categories)
  author: User
}
