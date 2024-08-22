export interface TransactionCategory {
  id: string
  name: string
}

export interface Transaction {
  id: string
  amount: string
  comment: string
  date: Date
  category: TransactionCategory
}
