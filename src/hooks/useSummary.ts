import { useMemo } from 'react'
import { useTransactions } from './useTransactions'

export const useSummary = () => {
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

  return { total, income, outcome }
}
