import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps
} from '@chakra-ui/react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

interface FieldProps extends InputProps {
  label?: string
  type?: string
  options: Array<string | number>
}

export const InputField = <T extends FieldValues>({
  label,
  type,
  ...rest
}: UseControllerProps<T> & Partial<FieldProps>) => {
  const {
    field,
    fieldState: { invalid, isTouched, error }
  } = useController(rest)

  return (
    <FormControl isInvalid={invalid && isTouched}>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} {...field} />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}
