import {
  TableContainer,
  Table as _Table,
  Tbody,
  Tr,
  Td,
  Text,
} from '@chakra-ui/react'

import { Transaction } from '../../../types'
import { dateFormatter, priceFormatter } from '../../../utils'

type Props = {
  transactions: Transaction[]
}

export const Table = ({ transactions }: Props) => (
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
                color={transaction.type === 'Income' ? 'green.300' : 'red.300'}
              >
                {transaction.type === 'Outcome' && '- '}
                {priceFormatter.format(transaction.price)}
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
              {dateFormatter.format(new Date(transaction.createdAt))}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </_Table>
  </TableContainer>
)
