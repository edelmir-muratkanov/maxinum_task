import { useForm } from 'react-hook-form'
import { addTransactionFormSchema, AddTransactionFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePostCreateTransactionMutation } from '@/lib/api/hooks/usePostCreateTransactionMutation'

export const useAddTransactionForm = () => {
  const form = useForm<AddTransactionFormSchema>({
    resolver: zodResolver(addTransactionFormSchema),
    defaultValues: {
      categoryName: '',
      comment: '',
      amount: 0,
      date: new Date(),
    },
  })

  const postCreateTransactionMutation = usePostCreateTransactionMutation()

  const onSubmit = form.handleSubmit(
    async values =>
      await postCreateTransactionMutation.mutateAsync({ params: values }),
  )

  return {
    onSubmit,
    form,
    loading: postCreateTransactionMutation.isPending,
  }
}
