import { Box, ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import { theme } from './styles/themes/default'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Box>App</Box>
    </ChakraProvider>
  )
}
