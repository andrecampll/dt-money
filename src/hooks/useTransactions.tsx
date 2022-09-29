import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
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
      const url = new URL('http://localhost:3000/transactions')

      if (query) url.searchParams.append('q', query)

      const response = await fetch(url)
      const data = await response.json()

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
