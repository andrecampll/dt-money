import {
  TableContainer,
  Table as _Table,
  Tbody,
  Tr,
  Td,
  Text,
} from '@chakra-ui/react'

type Props = {
  variant: 'income' | 'outcome'
}

export const Table = ({ variant }: Props) => (
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
        <Tr>
          <Td
            border="0"
            borderTopLeftRadius="6px"
            borderBottomLeftRadius="6px"
            w="50%"
            background="gray.700"
            padding="1.25rem 2rem"
          >
            Website Development
          </Td>
          <Td border="0" background="gray.700" padding="1.25rem 2rem">
            <Text
              as="span"
              color={variant === 'income' ? 'green.300' : 'red.300'}
            >
              R$ 12.000,00
            </Text>
          </Td>
          <Td border="0" background="gray.700" padding="1.25rem 2rem">
            Venda
          </Td>
          <Td
            border="0"
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            background="gray.700"
            padding="1.25rem 2rem"
          >
            13/10/2022
          </Td>
        </Tr>
        <Tr mb="0.5rem">
          <Td
            border="0"
            borderTopLeftRadius="6px"
            borderTopRightRadius="6px"
            background="gray.700"
            padding="1.25rem 2rem"
            w="50%"
          >
            Hamburger
          </Td>
          <Td border="0" background="gray.700" padding="1.25rem 2rem">
            <Text
              as="span"
              color={variant === 'income' ? 'red.300' : 'green.300'}
            >
              - R$ 58,00
            </Text>
          </Td>
          <Td border="0" background="gray.700" padding="1.25rem 2rem">
            Alimentação
          </Td>
          <Td
            border="0"
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            background="gray.700"
            padding="1.25rem 2rem"
          >
            13/10/2022
          </Td>
        </Tr>
      </Tbody>
    </_Table>
  </TableContainer>
)
