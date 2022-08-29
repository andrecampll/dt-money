import { Box, Button, Flex } from '@chakra-ui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import styled from 'styled-components'
import { Input } from './Input'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #202024;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const NewTransactionModal = () => (
  <Dialog.Portal>
    <Overlay />

    <Content>
      <Dialog.Title>New Transaction</Dialog.Title>

      <Flex as="form" action="" mt="2rem" flexDir="column" gap="1rem">
        <Input placeholder="Description" isRequired />
        <Input placeholder="Price" isRequired />
        <Input placeholder="Category" isRequired />

        <Button
          type="submit"
          h="58px"
          bgColor="primary.500"
          _hover={{
            backgroundColor: 'primary.700',
          }}
          _active={{
            backgroundColor: 'primary.700',
          }}
        >
          Register
        </Button>
      </Flex>

      <Dialog.Close asChild>
        <Button
          position="absolute"
          background="transparent"
          top="1.5rem"
          right="1.5rem"
          lineHeight="0"
          color="gray.500"
          _hover={{
            backgroundColor: 'transparent',
          }}
          _active={{
            backgroundColor: 'transparent',
          }}
        >
          <X size={24} />
        </Button>
      </Dialog.Close>
    </Content>
  </Dialog.Portal>
)
