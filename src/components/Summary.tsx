import { Box, Grid, Text } from '@chakra-ui/react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard } from './SummaryCard'

export const Summary = () => (
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
    <SummaryCard type="Incomes" amount={17400} />
    <SummaryCard type="Outcomes" amount={17400} />
    <SummaryCard type="Total" amount={17400} />
  </Grid>
)
