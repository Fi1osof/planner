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
export type ExpenditureItemGetUniqueQueryVariables = Types.Exact<{
  where: Types.ExpenditureItemWhereUniqueInput;
}>;


export type ExpenditureItemGetUniqueQuery = { __typename?: 'Query', expenditureItem?: Types.Maybe<(
    { __typename?: 'ExpenditureItem' }
    & ExpenditureItemFragment
  )> };


export const ExpenditureItemGetUniqueDocument = gql`
    query expenditureItemGetUnique($where: ExpenditureItemWhereUniqueInput!) {
  expenditureItem(where: $where) {
    ...expenditureItem
  }
}
    ${ExpenditureItemFragmentDoc}`;

/**
 * __useExpenditureItemGetUniqueQuery__
 *
 * To run a query within a React component, call `useExpenditureItemGetUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpenditureItemGetUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpenditureItemGetUniqueQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useExpenditureItemGetUniqueQuery(baseOptions: Apollo.QueryHookOptions<ExpenditureItemGetUniqueQuery, ExpenditureItemGetUniqueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExpenditureItemGetUniqueQuery, ExpenditureItemGetUniqueQueryVariables>(ExpenditureItemGetUniqueDocument, options);
      }
export function useExpenditureItemGetUniqueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExpenditureItemGetUniqueQuery, ExpenditureItemGetUniqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExpenditureItemGetUniqueQuery, ExpenditureItemGetUniqueQueryVariables>(ExpenditureItemGetUniqueDocument, options);
        }
export type ExpenditureItemGetUniqueQueryHookResult = ReturnType<typeof useExpenditureItemGetUniqueQuery>;
export type ExpenditureItemGetUniqueLazyQueryHookResult = ReturnType<typeof useExpenditureItemGetUniqueLazyQuery>;
export type ExpenditureItemGetUniqueQueryResult = Apollo.QueryResult<ExpenditureItemGetUniqueQuery, ExpenditureItemGetUniqueQueryVariables>;