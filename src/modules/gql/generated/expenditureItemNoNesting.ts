/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ExpenditureItemNoNestingFragment = { __typename?: 'ExpenditureItem', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, foo?: Types.Maybe<boolean> };

export const ExpenditureItemNoNestingFragmentDoc = gql`
    fragment expenditureItemNoNesting on ExpenditureItem {
  id
  createdAt
  updatedAt
  name
  foo
}
    `;