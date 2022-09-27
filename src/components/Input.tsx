import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, isRequired, ...props }: InputProps, ref) => (
    <ChakraInput
      ref={ref}
      borderRadius="6px"
      border="0"
      placeholder={placeholder}
      background="gray.900"
      color="gray.300"
      padding="1rem"
      _placeholder={{
        color: 'gray.500',
      }}
      required={isRequired}
      {...props}
    />
  ),
)
Input.displayName = 'Input'
