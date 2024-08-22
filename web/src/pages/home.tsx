import { AddTransactionForm } from '@/components/add-transaction-form'
import { TransactionCard } from '@/components/transaction-card/component'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useGetTransactionsQuery } from '@/lib/api/hooks/useGetTransactionsQuery'
import { ReactNode } from 'react'

export function HomePage(): ReactNode {
  const { data } = useGetTransactionsQuery()
  return (
    <div className='flex flex-auto gap-x-8'>
      <ScrollArea className='flex-auto'>
        {data.data.map(item => (
          <TransactionCard transaction={item} key={item.id} />
        ))}
      </ScrollArea>

      <Card>
        <CardHeader>
          <CardTitle>Создать новый пункт расходов</CardTitle>
        </CardHeader>
        <CardContent>
          <AddTransactionForm />
        </CardContent>
      </Card>
    </div>
  )
}
