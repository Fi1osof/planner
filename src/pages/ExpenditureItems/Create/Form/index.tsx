import React, { useCallback, useMemo } from 'react'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { ExpenditureItemCreateInput } from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'
import { useRouter } from 'next/dist/client/router'
import { useCreateExpenditureItemMutation } from 'src/modules/gql/generated/createExpenditureItem'
// import { FormStyled } from "src/components/ui/form/styles";

type FormData = ExpenditureItemCreateInput

/**
 * Форма создания статьи расходов
 */
export const ExpenditureItemCreateForm: React.FC = () => {
  const router = useRouter()

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<FormData> = yup
      .object({
        name: yup.string().required(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  })

  const [
    createExpenditureItem,
    { loading: createExpenditureItemLoading, client },
  ] = useCreateExpenditureItemMutation({})

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (createExpenditureItemLoading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    createExpenditureItem({
      variables: {
        data,
      },
    })
      .then((r) => {
        if (r.data?.createExpenditureItem.id) {
          client
            .resetStore()
            .catch(console.error)
            .finally(() => {
              router.push(
                `/expenditureitems/${r.data?.createExpenditureItem.id}`
              )
            })
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  const nameFieldRender: ControllerProps<FormData, 'name'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Название"
          error={formState.errors[field.name]}
          {...field}
          value={field.value || ''}
        />
      )
    }, [])

  return useMemo(() => {
    return (
      <>
        <form onSubmit={onSubmit}>
          <h2>Новая статья расхода</h2>

          <Controller
            name="name"
            control={control}
            defaultValue={''}
            render={nameFieldRender}
          />

          <div>
            <Button
              type="submit"
              disabled={createExpenditureItemLoading}
              variant="success"
            >
              Создать
            </Button>
          </div>
        </form>
      </>
    )
  }, [control, createExpenditureItemLoading, nameFieldRender, onSubmit])
}
