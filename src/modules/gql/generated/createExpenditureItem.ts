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
export type CreateExpenditureItemMutationVariables = Types.Exact<{
  data: Types.ExpenditureItemCreateInput;
}>;


export type CreateExpenditureItemMutation = { __typename?: 'Mutation', createExpenditureItem: (
    { __typename?: 'ExpenditureItem' }
    & ExpenditureItemFragment
  ) };


export const CreateExpenditureItemDocument = gql`
    mutation createExpenditureItem($data: ExpenditureItemCreateInput!) {
  createExpenditureItem(data: $data) {
    ...expenditureItem
  }
}
    ${ExpenditureItemFragmentDoc}`;
export type CreateExpenditureItemMutationFn = Apollo.MutationFunction<CreateExpenditureItemMutation, CreateExpenditureItemMutationVariables>;

/**
 * __useCreateExpenditureItemMutation__
 *
 * To run a mutation, you first call `useCreateExpenditureItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExpenditureItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExpenditureItemMutation, { data, loading, error }] = useCreateExpenditureItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateExpenditureItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateExpenditureItemMutation, CreateExpenditureItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExpenditureItemMutation, CreateExpenditureItemMutationVariables>(CreateExpenditureItemDocument, options);
      }
export type CreateExpenditureItemMutationHookResult = ReturnType<typeof useCreateExpenditureItemMutation>;
export type CreateExpenditureItemMutationResult = Apollo.MutationResult<CreateExpenditureItemMutation>;
export type CreateExpenditureItemMutationOptions = Apollo.BaseMutationOptions<CreateExpenditureItemMutation, CreateExpenditureItemMutationVariables>;