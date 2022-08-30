import { ReactNode, useCallback } from 'react'
import { Box, Flex, propNames, useRadio, UseRadioProps } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  variant: 'Income' | 'Outcome'
  selected?: boolean
} & UseRadioProps

export const TransactionTypeButton = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const getIconColor = useCallback(() => {
    if (props.isChecked) return 'white'
    if (props.variant === 'Income') return 'green.300'
    if (props.variant === 'Outcome') return 'red.300'
  }, [props])

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        background="gray.700"
        alignItems="center"
        justifyContent="center"
        gap="0.5rem"
        borderRadius="6px"
        cursor="pointer"
        border="0"
        color="gray.300"
        p="1rem"
        _checked={{
          bg: props.variant === 'Income' ? 'green.500' : 'red.500',
          color: 'white',
        }}
        __css={{
          display: 'flex',
          '& > svg': {
            color: getIconColor(),
          },
        }}
      >
        {props.children}
      </Flex>
    </Box>
  )
}
