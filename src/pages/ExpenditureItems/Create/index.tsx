import React from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import { ExpenditureItemCreateForm } from './Form'

export const ExpenditureItemCreatePage: Page = () => {
  return (
    <>
      <NextSeo title="Создание статьи расходов" />

      <ExpenditureItemCreateForm />
    </>
  )
}
