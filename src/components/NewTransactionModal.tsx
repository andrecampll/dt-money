import { ChangeEvent, useMemo } from 'react'
import { Button, Flex, Grid, useRadioGroup } from '@chakra-ui/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'

import { Input } from './Input'
import { TransactionTypeButton } from './TransactionTypeButton'

import * as S from './NewTransactionModal.styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['Income', 'Outcome']),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const options = useMemo<('Income' | 'Outcome')[]>(
    () => ['Income', 'Outcome'],
    [],
  )

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'option',
    onChange: console.log,
  })

  const group = useMemo(() => getRootProps(), [getRootProps])

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <Flex
          as="form"
          action=""
          mt="2rem"
          flexDir="column"
          gap="1rem"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <Input
            type="text"
            placeholder="Description"
            isRequired
            {...register('description')}
          />
          <Input
            type="number"
            placeholder="Price"
            isRequired
            {...register('price', { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Category"
            isRequired
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Grid
                {...group}
                gridTemplateColumns="repeat(2, 1fr)"
                gap="1rem"
                mt="0.5rem"
              >
                {options.map((value) => {
                  const radio = getRadioProps({ value })

                  const handleChange = (
                    event: ChangeEvent<HTMLInputElement>,
                  ) => {
                    radio.onChange && radio.onChange(event)
                    field.onChange(event)
                  }

                  return (
                    <TransactionTypeButton
                      key={value}
                      variant={value}
                      {...radio}
                      onChange={handleChange}
                    >
                      {value === 'Income' ? (
                        <ArrowCircleUp size={24} />
                      ) : (
                        <ArrowCircleDown size={24} />
                      )}
                      {value}
                    </TransactionTypeButton>
                  )
                })}
              </Grid>
            )}
          />

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
            isLoading={isSubmitting}
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
      </S.Content>
    </Dialog.Portal>
  )
}
