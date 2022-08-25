import { Button, Flex, Input } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'

export const SearchForm = () => (
  <Flex as="form" gap="1rem" maxW="1072px" margin="4rem auto 0">
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
      leftIcon={<MagnifyingGlass size={20} />}
    >
      Search
    </Button>
  </Flex>
)
