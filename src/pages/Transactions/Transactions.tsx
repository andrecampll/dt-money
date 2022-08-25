import { Box } from '@chakra-ui/react'
import { Header, Summary } from '../../components'
import { SearchForm, Table } from './components'

export const Transactions = () => {
  return (
    <Box>
      <Header />
      <Summary />

      <SearchForm />
      <Table variant="income" />
    </Box>
  )
}
