import {
  extendType,
  inputObjectType,
  intArg,
  list,
  nonNull,
  objectType,
} from 'nexus'
import { expenditureItemsCreatedByResolver } from './resolvers'
import { createExpenditureItemResolver } from './resolvers/createExpenditureItem'

export const ExpenditureItemQueryExtends = extendType({
  type: 'Query',
  definition(t) {
    t.crud.expenditureItem({
      description: 'Статья расхода',
    })

    t.crud.expenditureItems({
      filtering: true,
      ordering: true,
    })

    t.nonNull.list.nonNull.field('expenditureItemsCreatedBy', {
      type: 'ExpenditureItem',
      description: 'Список созданных текущим пользователем статей расходов',
      args: {
        take: intArg(),
        skip: intArg(),
        where: 'ExpenditureItemWhereInput',
        orderBy: list(nonNull('ExpenditureItemOrderByInput')),
      },
      resolve: expenditureItemsCreatedByResolver,
    })
  },
})

export const ExpenditureItemMutationExtends = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createExpenditureItem', {
      type: 'ExpenditureItem',
      description: 'Создать статью расходов',
      args: {
        data: nonNull('ExpenditureItemCreateInput'),
      },
      resolve: createExpenditureItemResolver,
    })
  },
})

export const ExpenditureItemCreateInput = inputObjectType({
  name: 'ExpenditureItemCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const ExpenditureItem = objectType({
  name: 'ExpenditureItem',
  description: 'Статья расходов',
  sourceType: {
    module: '@prisma/client',
    export: 'ExpenditureItem',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.boolean('foo')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ createdById }, _, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: createdById,
          },
        })
      },
    })
  },
})
