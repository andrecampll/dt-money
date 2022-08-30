import { Button, Flex, Grid, useRadioGroup } from '@chakra-ui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleUp, X } from 'phosphor-react'
import { useMemo } from 'react'

import styled from 'styled-components'
import { Input } from './Input'
import { TransactionTypeButton } from './TransactionTypeButton'

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

export const NewTransactionModal = () => {
  const options = useMemo<('Income' | 'Outcome')[]>(
    () => ['Income', 'Outcome'],
    [],
  )

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'option',
    onChange: console.log,
  })

  const group = useMemo(() => getRootProps(), [getRootProps])

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <Flex as="form" action="" mt="2rem" flexDir="column" gap="1rem">
          <Input placeholder="Description" isRequired />
          <Input placeholder="Price" isRequired />
          <Input placeholder="Category" isRequired />

          <Grid
            {...group}
            gridTemplateColumns="repeat(2, 1fr)"
            gap="1rem"
            mt="0.5rem"
          >
            {options.map((value) => {
              const radio = getRadioProps({ value })

              return (
                <TransactionTypeButton key={value} {...radio} variant={value}>
                  <ArrowCircleUp size={24} />
                  {value}
                </TransactionTypeButton>
              )
            })}
          </Grid>

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
}
