/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ExpenditureItemFragment } from './expenditureItem';
import { gql } from '@apollo/client';
import { ExpenditureItemFragmentDoc } from './expenditureItem';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ExpenditureItemsCreatedByQueryVariables = Types.Exact<{
  orderBy?: Types.Maybe<Array<Types.ExpenditureItemOrderByInput> | Types.ExpenditureItemOrderByInput>;
  where?: Types.Maybe<Types.ExpenditureItemWhereInput>;
}>;


export type ExpenditureItemsCreatedByQuery = { __typename?: 'Query', expenditureItemsCreatedBy: Array<(
    { __typename?: 'ExpenditureItem' }
    & ExpenditureItemFragment
  )> };


export const ExpenditureItemsCreatedByDocument = gql`
    query expenditureItemsCreatedBy($orderBy: [ExpenditureItemOrderByInput!], $where: ExpenditureItemWhereInput) {
  expenditureItemsCreatedBy(orderBy: $orderBy, where: $where) {
    ...expenditureItem
  }
}
    ${ExpenditureItemFragmentDoc}`;

/**
 * __useExpenditureItemsCreatedByQuery__
 *
 * To run a query within a React component, call `useExpenditureItemsCreatedByQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpenditureItemsCreatedByQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpenditureItemsCreatedByQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useExpenditureItemsCreatedByQuery(baseOptions?: Apollo.QueryHookOptions<ExpenditureItemsCreatedByQuery, ExpenditureItemsCreatedByQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExpenditureItemsCreatedByQuery, ExpenditureItemsCreatedByQueryVariables>(ExpenditureItemsCreatedByDocument, options);
      }
export function useExpenditureItemsCreatedByLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExpenditureItemsCreatedByQuery, ExpenditureItemsCreatedByQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExpenditureItemsCreatedByQuery, ExpenditureItemsCreatedByQueryVariables>(ExpenditureItemsCreatedByDocument, options);
        }
export type ExpenditureItemsCreatedByQueryHookResult = ReturnType<typeof useExpenditureItemsCreatedByQuery>;
export type ExpenditureItemsCreatedByLazyQueryHookResult = ReturnType<typeof useExpenditureItemsCreatedByLazyQuery>;
export type ExpenditureItemsCreatedByQueryResult = Apollo.QueryResult<ExpenditureItemsCreatedByQuery, ExpenditureItemsCreatedByQueryVariables>;