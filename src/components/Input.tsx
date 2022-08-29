import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export const Input = ({ placeholder, isRequired, ...props }: InputProps) => (
  <ChakraInput
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
)
