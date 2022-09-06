import { Box } from '@chakra-ui/react'

import { Header, Summary } from '../../components'
import { useTransaction } from '../../hooks'
import { SearchForm, Table } from './components'

export const Transactions = () => {
  const { transactions } = useTransaction()

  return (
    <Box>
      <Header />
      <Summary />

      <SearchForm />
      <Table transactions={transactions} />
    </Box>
  )
}
