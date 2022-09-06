import { useCallback, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import { Header, Summary } from '../../components'
import { Transaction } from '../../types'
import { SearchForm, Table } from './components'

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = useCallback(async () => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }, [])

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <Box>
      <Header />
      <Summary />

      <SearchForm />
      <Table transactions={transactions} variant="income" />
    </Box>
  )
}
