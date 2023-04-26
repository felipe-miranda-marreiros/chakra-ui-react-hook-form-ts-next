import * as React from 'react'
import { useForm, useFieldArray, useWatch, Control } from 'react-hook-form'
import { InputField } from './InputField'

type FormValues = {
  cart: {
    name: string
    price: number
    quantity: number
  }[]
}

export const FieldArray = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: '', quantity: 0, price: 0 }]
    },
    mode: 'onBlur'
  })
  const { fields, append, remove } = useFieldArray({
    name: 'cart',
    control
  })
  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className={'section'} key={field.id}>
                <InputField
                  control={control}
                  name={`cart.${index}.name` as const}
                  placeholder="Nome"
                  isRequired
                />
                <InputField
                  control={control}
                  name={`cart.${index}.quantity` as const}
                  placeholder="Quantidade"
                />
                <InputField
                  control={control}
                  name={`cart.${index}.price` as const}
                  placeholder="Preço"
                />
                <button type="button" onClick={() => remove(index)}>
                  Remover
                </button>
              </section>
            </div>
          )
        })}

        <button
          type="button"
          onClick={() =>
            append({
              name: '',
              quantity: 0,
              price: 0
            })
          }
        >
          Adicionar
        </button>
        <input type="submit" />
      </form>
    </div>
  )
}
