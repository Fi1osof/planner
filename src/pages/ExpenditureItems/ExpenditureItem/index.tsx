import React from 'react'
import { NextSeo } from 'next-seo'
import { useExpenditureItemGetUniqueQuery } from 'src/modules/gql/generated'
import { Page, PageProps } from 'src/pages/_App/interfaces'
import { ExpenditureItemPageView } from './View'

export const ExpenditureItemPage: Page<
  PageProps & {
    id: string | undefined
  }
> = ({ id }) => {
  const data = useExpenditureItemGetUniqueQuery({
    skip: !id,
    variables: {
      where: {
        id,
      },
    },
  })

  const expenditureItem = data.data?.expenditureItem

  if (!expenditureItem) {
    return null
  }

  return (
    <>
      <NextSeo title={`Статья расходов "${expenditureItem.name}"`} />

      <ExpenditureItemPageView expenditureItem={expenditureItem} />
    </>
  )
}

ExpenditureItemPage.getInitialProps = async ({ query }) => {
  const id = query.id && typeof query.id === 'string' ? query.id : undefined

  return {
    id,
    statusCode: !id ? 404 : undefined,
  }
}
