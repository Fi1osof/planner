import { FieldResolver } from 'nexus'

export const createExpenditureItemResolver: FieldResolver<
  'Mutation',
  'createExpenditureItem'
> = async (_, args, ctx) => {
  const { data } = args

  const { id: currentUserid } = ctx.currentUser || {}

  if (!currentUserid) {
    throw new Error('Необходимо авторизоваться')
  }

  return ctx.prisma.expenditureItem.create({
    data: {
      ...data,
      createdById: currentUserid,
    },
  })
}
