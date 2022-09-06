import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import { TransactionsProvider } from './hooks/useTransactions'
import { Transactions } from './pages/Transactions/Transactions'

import { theme } from './styles/themes/default'

export const App = () => {
  return (
    <TransactionsProvider>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Transactions />
      </ChakraProvider>
    </TransactionsProvider>
  )
}
