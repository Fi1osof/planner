import { FieldResolver } from 'nexus'
import { Prisma } from '@prisma/client'

export const expenditureItemsCreatedByResolver: FieldResolver<
  'Query',
  'expenditureItemsCreatedBy'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const { take, skip } = args

  const orderBy = args.orderBy as Prisma.ExpenditureItemFindManyArgs['orderBy']
  const whereProps = args.where as Prisma.ExpenditureItemFindManyArgs['where']

  /**
   * В условиях у нас обязательно должен быть текущий пользователь, мы берем только его элементы
   */
  const whereAnd: Prisma.Enumerable<Prisma.ExpenditureItemWhereInput> = [
    {
      createdById: currentUserId,
    },
  ]

  /**
   * Если есть прочие элементы, тоже добавляем
   */
  if (whereProps) {
    whereAnd.push(whereProps)
  }

  const where: Prisma.ExpenditureItemFindManyArgs['where'] = {
    AND: whereAnd,
  }

  return ctx.prisma.expenditureItem.findMany({
    take: take || undefined,
    skip: skip || undefined,
    orderBy,
    where,
  })
}
