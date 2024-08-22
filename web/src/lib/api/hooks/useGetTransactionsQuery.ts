import { useSuspenseQuery } from '@tanstack/react-query'
import { getTransactions } from '../requests'

export const useGetTransactionsQuery = (
  settings?: QuerySettings<typeof getTransactions>,
) =>
  useSuspenseQuery({
    queryKey: ['transactions'],
    queryFn: ({ signal }) =>
      getTransactions({ config: { signal, ...settings?.config } }),
  })
