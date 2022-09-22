import { Box } from '@chakra-ui/react'

import { Header, Summary } from '../../components'
import { useTransactions } from '../../hooks'
import { SearchForm, Table } from './components'

export const Transactions = () => {
  const { transactions } = useTransactions()

  return (
    <Box>
      <Header />
      <Summary />

      <SearchForm />
      <Table transactions={transactions} />
    </Box>
  )
}
