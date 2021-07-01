/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { ExpenditureItemNoNestingFragment } from './expenditureItemNoNesting';
import { gql } from '@apollo/client';
import { ExpenditureItemNoNestingFragmentDoc } from './expenditureItemNoNesting';
export type ExpenditureItemFragment = (
  { __typename?: 'ExpenditureItem' }
  & ExpenditureItemNoNestingFragment
);

export const ExpenditureItemFragmentDoc = gql`
    fragment expenditureItem on ExpenditureItem {
  ...expenditureItemNoNesting
}
    ${ExpenditureItemNoNestingFragmentDoc}`;