import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  type: 'income' | 'outcome'
}

export const TransactionTypeButton = ({ children, type }: Props) => (
  <Flex
    background="gray.700"
    alignItems="center"
    justifyContent="center"
    gap="0.5rem"
    borderRadius="6px"
    cursor="pointer"
    border="0"
    color="gray.300"
    p="1rem"
    __css={{
      display: 'flex',
      '& > svg': {
        color: type === 'income' ? 'green.300' : 'red.300',
      },
    }}
  >
    {children}
  </Flex>
)
