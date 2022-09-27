import { Grid } from '@chakra-ui/react'
import { useSummary } from '../hooks'
import { SummaryCard } from './SummaryCard'

export const Summary = () => {
  const { income, outcome, total } = useSummary()

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
