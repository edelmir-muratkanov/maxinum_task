import { z } from 'zod'

export const addTransactionFormSchema = z.object({
  categoryName: z.string().trim().min(1),
  date: z.date(),
  amount: z.number().positive(),
  comment: z.string().optional(),
})

export type AddTransactionFormSchema = z.infer<typeof addTransactionFormSchema>
