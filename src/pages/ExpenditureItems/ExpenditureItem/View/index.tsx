import React, { useMemo } from 'react'
import { ExpenditureItemPageViewProps } from './interfaces'

export const ExpenditureItemPageView: React.FC<ExpenditureItemPageViewProps> =
  ({ expenditureItem }) => {
    return useMemo(() => {
      return <>{expenditureItem.name}</>
    }, [expenditureItem.name])
  }
