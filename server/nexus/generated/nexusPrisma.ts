import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Token: Prisma.Token
  File: Prisma.File
  ExpenditureItem: Prisma.ExpenditureItem
  ExpenditureItemPeriod: Prisma.ExpenditureItemPeriod
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image' | 'Tokens' | 'Files' | 'ExpenditureItemsCreatedBy' | 'ExpenditureItemPeriodsCreatedBy'
      ordering: 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
    expenditureItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'ExpenditureItemPeriod'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById'
    }
    expenditureItemPeriods: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'dateFrom' | 'dateTill' | 'expenditureItemId' | 'ExpenditureItem' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'dateFrom' | 'dateTill' | 'expenditureItemId' | 'createdById'
    }
  },
  User: {
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
    ExpenditureItemsCreatedBy: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'ExpenditureItemPeriod'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById'
    }
    ExpenditureItemPeriodsCreatedBy: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'dateFrom' | 'dateTill' | 'expenditureItemId' | 'ExpenditureItem' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'dateFrom' | 'dateTill' | 'expenditureItemId' | 'createdById'
    }
  }
  Token: {

  }
  File: {

  }
  ExpenditureItem: {
    ExpenditureItemPeriod: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'dateFrom' | 'dateTill' | 'expenditureItemId' | 'ExpenditureItem' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'dateFrom' | 'dateTill' | 'expenditureItemId' | 'createdById'
    }
  }
  ExpenditureItemPeriod: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    token: 'Token'
    tokens: 'Token'
    file: 'File'
    files: 'File'
    expenditureItem: 'ExpenditureItem'
    expenditureItems: 'ExpenditureItem'
    expenditureItemPeriod: 'ExpenditureItemPeriod'
    expenditureItemPeriods: 'ExpenditureItemPeriod'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneToken: 'Token'
    updateOneToken: 'Token'
    updateManyToken: 'AffectedRowsOutput'
    deleteOneToken: 'Token'
    deleteManyToken: 'AffectedRowsOutput'
    upsertOneToken: 'Token'
    createOneFile: 'File'
    updateOneFile: 'File'
    updateManyFile: 'AffectedRowsOutput'
    deleteOneFile: 'File'
    deleteManyFile: 'AffectedRowsOutput'
    upsertOneFile: 'File'
    createOneExpenditureItem: 'ExpenditureItem'
    updateOneExpenditureItem: 'ExpenditureItem'
    updateManyExpenditureItem: 'AffectedRowsOutput'
    deleteOneExpenditureItem: 'ExpenditureItem'
    deleteManyExpenditureItem: 'AffectedRowsOutput'
    upsertOneExpenditureItem: 'ExpenditureItem'
    createOneExpenditureItemPeriod: 'ExpenditureItemPeriod'
    updateOneExpenditureItemPeriod: 'ExpenditureItemPeriod'
    updateManyExpenditureItemPeriod: 'AffectedRowsOutput'
    deleteOneExpenditureItemPeriod: 'ExpenditureItemPeriod'
    deleteManyExpenditureItemPeriod: 'AffectedRowsOutput'
    upsertOneExpenditureItemPeriod: 'ExpenditureItemPeriod'
  },
  User: {
    id: 'String'
    username: 'String'
    email: 'String'
    fullname: 'String'
    password: 'String'
    active: 'Boolean'
    sudo: 'Boolean'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    image: 'String'
    Tokens: 'Token'
    Files: 'File'
    ExpenditureItemsCreatedBy: 'ExpenditureItem'
    ExpenditureItemPeriodsCreatedBy: 'ExpenditureItemPeriod'
  }
  Token: {
    id: 'String'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    userId: 'String'
    User: 'User'
  }
  File: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    path: 'String'
    filename: 'String'
    name: 'String'
    mimetype: 'String'
    encoding: 'String'
    size: 'Float'
    rank: 'Int'
    createdById: 'String'
    CreatedBy: 'User'
  }
  ExpenditureItem: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    createdById: 'String'
    CreatedBy: 'User'
    ExpenditureItemPeriod: 'ExpenditureItemPeriod'
  }
  ExpenditureItemPeriod: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    dateFrom: 'DateTime'
    dateTill: 'DateTime'
    expenditureItemId: 'String'
    ExpenditureItem: 'ExpenditureItem'
    createdById: 'String'
    CreatedBy: 'User'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  File: Typegen.NexusPrismaFields<'File'>
  ExpenditureItem: Typegen.NexusPrismaFields<'ExpenditureItem'>
  ExpenditureItemPeriod: Typegen.NexusPrismaFields<'ExpenditureItemPeriod'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  