import React, { useMemo } from 'react'
import Link from 'next/link'
import { ExpenditureItemsViewProps } from './interfaces'
import {
  ExpenditureItemsViewFooterStyled,
  ExpenditureItemsViewStyled,
} from './styles'

export const ExpenditureItemsView: React.FC<ExpenditureItemsViewProps> = ({
  expenditureItems,
}) => {
  return useMemo(() => {
    return (
      <>
        <ExpenditureItemsViewStyled>
          {expenditureItems.map((n) => {
            return (
              <div key={n.id}>
                <Link href={`/expenditureitems/${n.id}`}>{n.name}</Link>
              </div>
            )
          })}

          <ExpenditureItemsViewFooterStyled>
            <Link href="/expenditureitems/create">Создать статью расходов</Link>
          </ExpenditureItemsViewFooterStyled>
        </ExpenditureItemsViewStyled>
      </>
    )
  }, [expenditureItems])
}
