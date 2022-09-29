import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib'

import { Transaction } from '../types'

type TransactionsContextType = {
  transactions: Transaction[]
  addTransactions: (transactions: Transaction[]) => void
  fetchTransactions: (query?: string) => Promise<void>
}

const TransactionsContext = createContext({} as TransactionsContextType)

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const addTransactions = useCallback(
    (newTransactions: Transaction[]) => setTransactions(newTransactions),
    [],
  )

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const { data } = await api.get('transactions', {
        params: {
          q: query,
        },
      })

      addTransactions(data)
    },
    [addTransactions],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransactions, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  return useContext(TransactionsContext)
}
