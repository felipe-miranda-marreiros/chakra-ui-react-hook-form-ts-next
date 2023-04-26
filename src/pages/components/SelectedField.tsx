import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
  Select
} from '@chakra-ui/react'
import { Key } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

interface FieldOptions {
  id: Key
  option: string | number
}

interface FieldProps extends InputProps {
  label?: string
  type?: string
  options: Array<FieldOptions>
}

export const SelectField = <T extends FieldValues>({
  label,
  type,
  options,
  ...rest
}: UseControllerProps<T> & FieldProps) => {
  const {
    field,
    fieldState: { invalid, isTouched, error }
  } = useController(rest)

  return (
    <FormControl isInvalid={invalid && isTouched}>
      <FormLabel>{label}</FormLabel>
      <Select {...field}>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.option}>
              {option.option}
            </option>
          )
        })}
      </Select>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}
