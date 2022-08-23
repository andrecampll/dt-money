import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import { Transactions } from './pages/Transactions/Transactions'

import { theme } from './styles/themes/default'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Transactions />
    </ChakraProvider>
  )
}
