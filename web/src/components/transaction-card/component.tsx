import { Transaction } from '@/lib/types/transaction'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export function TransactionCard({ transaction }: { transaction: Transaction }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {transaction.category.name} {transaction.date.toString()}
        </CardTitle>
        <CardDescription>{transaction.amount}</CardDescription>
      </CardHeader>
      <CardContent>{transaction.comment}</CardContent>
    </Card>
  )
}
