import { Button, Flex, Input } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../../hooks'

import * as zod from 'zod'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { fetchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <Flex
      as="form"
      gap="1rem"
      maxW="1072px"
      margin="4rem auto 0"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <Input
        flex="1"
        borderRadius="6px"
        border="0"
        backgroundColor="gray.900"
        color="gray.300"
        padding="1rem"
        _placeholder={{
          color: 'gray.500',
        }}
        placeholder="Search for transactions"
        _focus={{
          boxShadow: '0 0 0 1px #7158c1;',
        }}
        type="text"
        {...register('query')}
      />

      <Button
        variant="outline"
        borderColor="primary.500"
        color="primary.500"
        _hover={{
          backgroundColor: 'primary.500',
          color: 'white',
        }}
        _active={{
          backgroundColor: 'primary.700',
          color: 'white',
        }}
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        leftIcon={<MagnifyingGlass size={20} />}
      >
        Search
      </Button>
    </Flex>
  )
}
