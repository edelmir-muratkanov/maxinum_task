import { useSuspenseQuery } from '@tanstack/react-query'
import { getTransactionCategories } from '../requests'

export const useGetTransactionCategoriesQuery = (
  settings?: QuerySettings<typeof getTransactionCategories>,
) =>
  useSuspenseQuery({
    queryKey: ['transactions', 'categories'],
    queryFn: ({ signal }) =>
      getTransactionCategories({ config: { signal, ...settings?.config } }),
  })
