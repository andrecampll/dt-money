import { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'
import { api } from '../lib'

import { CreateTransactionInput, Transaction } from '../types'

type TransactionsContextType = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

type TransactionsProviderProps = {
  children: ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const { data } = await api.get('transactions', {
        params: {
          q: query,
          _sort: 'createdAt',
          _order: 'desc',
        },
      })

      setTransactions(data)
    },
    [setTransactions],
  )

  const createTransaction = useCallback(
    async (newTransaction: CreateTransactionInput) => {
      const { category, description, price, type } = newTransaction

      const { data } = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((transactions) => [data, ...transactions])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  return useContextSelector(TransactionsContext, (context) => context)
}
