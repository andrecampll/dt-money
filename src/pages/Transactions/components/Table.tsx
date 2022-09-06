import {
  TableContainer,
  Table as _Table,
  Tbody,
  Tr,
  Td,
  Text,
} from '@chakra-ui/react'

import { Transaction } from '../../../types'

type Props = {
  variant: 'income' | 'outcome'
  transactions: Transaction[]
}

export const Table = ({ variant, transactions }: Props) => (
  <TableContainer maxW="1120px" margin="2rem auto 0">
    <_Table
      padding="0 1.5rem"
      style={{
        borderCollapse: 'separate',
        borderSpacing: '0 0.5rem',
      }}
    >
      <Tbody
        __css={{
          'tr td': {
            padding: '1.25rem 2rem',
            background: 'gray.700',
          },
        }}
      >
        {transactions.map((transaction) => (
          <Tr key={transaction.id}>
            <Td
              border="0"
              borderTopLeftRadius="6px"
              borderBottomLeftRadius="6px"
              w="50%"
              background="gray.700"
              padding="1.25rem 2rem"
            >
              {transaction.description}
            </Td>
            <Td border="0" background="gray.700" padding="1.25rem 2rem">
              <Text
                as="span"
                color={transaction.type === 'income' ? 'green.300' : 'red.300'}
              >
                R$ {transaction.price}
              </Text>
            </Td>
            <Td border="0" background="gray.700" padding="1.25rem 2rem">
              {transaction.category}
            </Td>
            <Td
              border="0"
              borderTopRightRadius="6px"
              borderBottomRightRadius="6px"
              background="gray.700"
              padding="1.25rem 2rem"
            >
              {transaction.createdAt}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </_Table>
  </TableContainer>
)
