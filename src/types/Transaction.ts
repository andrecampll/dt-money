export type Transaction = {
  id: number
  description: string
  type: 'Income' | 'Outcome'
  price: number
  category: string
  createdAt: string
}

export type CreateTransactionInput = {
  description: string
  price: number
  category: string
  type: 'Income' | 'Outcome'
}
