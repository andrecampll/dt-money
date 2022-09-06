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

  const loadTransactions = useCallback(async () => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    addTransactions(data)
  }, [addTransactions])

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <TransactionsContext.Provider value={{ transactions, addTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransaction = () => {
  return useContext(TransactionsContext)
}
