import { NextSeo } from 'next-seo'
import React from 'react'
import { useExpenditureItemsCreatedByQuery } from 'src/modules/gql/generated/expenditureItemsCreatedBy'
import { Page } from '../_App/interfaces'
import { ExpenditureItemsView } from './View'

export const ExpenditureItemsPage: Page = () => {
  const data = useExpenditureItemsCreatedByQuery()

  return (
    <>
      <NextSeo title="Статьи расходов" />

      <ExpenditureItemsView
        expenditureItems={data.data?.expenditureItemsCreatedBy || []}
      />
    </>
  )
}
