import { Box, Grid, Text } from '@chakra-ui/react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useMemo } from 'react'
import { useTransactions } from '../hooks'
import { SummaryCard } from './SummaryCard'

export const Summary = () => {
  const { transactions } = useTransactions()

  const { total, income, outcome } = useMemo(
    () =>
      transactions.reduce(
        (acc, current) => {
          if (current.type === 'income') {
            acc.income += current.price
            acc.total += current.price
          } else {
            acc.outcome += current.price
            acc.total -= current.price
          }

          return acc
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      ),
    [transactions],
  )

  return (
    <Grid
      as="section"
      w="100%"
      maxW="1120px"
      m="0 auto"
      p="0 1.5rem"
      gap="2rem"
      mt="-5rem"
      gridTemplateColumns="repeat(3, 1fr)"
    >
      <SummaryCard type="Incomes" amount={income} />
      <SummaryCard type="Outcomes" amount={outcome} />
      <SummaryCard type="Total" amount={total} />
    </Grid>
  )
}
