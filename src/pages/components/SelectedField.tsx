import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
  Select
} from '@chakra-ui/react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

interface FieldProps extends InputProps {
  label?: string
  type?: string
  options: Array<string | number>
}

export const SelectField = <T extends FieldValues>(
  props: UseControllerProps<T> & FieldProps
) => {
  const {
    field,
    fieldState: { invalid, isTouched, error }
  } = useController(props)

  return (
    <FormControl isInvalid={invalid && isTouched}>
      <FormLabel>{props.label}</FormLabel>
      <Select {...field}>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </Select>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}
