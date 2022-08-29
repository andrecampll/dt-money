import { Box, Button, Image } from '@chakra-ui/react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../public/logo-full.svg'
import { NewTransactionModal } from './NewTransactionModal'

export const Header = () => (
  <Box as="header" background="gray.900" p="2.5rem 0 7.5rem">
    <Box
      w="100%"
      maxW="1120px"
      m="0 auto"
      p="0 1.5rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button
            h="50px"
            bgColor="primary.500"
            borderRadius="6px"
            p="0 1.25rem"
            _hover={{
              backgroundColor: 'primary.700',
            }}
            _active={{
              backgroundColor: 'primary.700',
            }}
          >
            New Transaction
          </Button>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </Box>
  </Box>
)
