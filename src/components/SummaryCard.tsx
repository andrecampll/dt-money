import { ReactNode, useMemo } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { priceFormatter } from '../utils'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

type Props = {
  type: 'Incomes' | 'Outcomes' | 'Total'
  amount: number
}

export const SummaryCard = ({ type, amount }: Props) => {
  const getIcon = useMemo<{
    Incomes: ReactNode
    Outcomes: ReactNode
    Total: ReactNode
  }>(
    () => ({
      Incomes: <ArrowCircleUp size={32} color="#00b37e" />,
      Outcomes: <ArrowCircleDown size={32} color="#f75a68" />,
      Total: <CurrencyDollar size={32} color="#fff" />,
    }),
    [],
  )

  return (
    <Box
      bgColor={type === 'Total' ? 'primary.700' : 'gray.600'}
      borderRadius="6px"
      p="2rem"
    >
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        color="gray.300"
      >
        <Text as="span">{type}</Text>
        {getIcon[type]}
      </Flex>

      <Text as="strong" display="block" mt="1rem" fontSize="2rem">
        {priceFormatter.format(amount)}
      </Text>
    </Box>
  )
}
