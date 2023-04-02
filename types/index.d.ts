// export type LogLevel = 'info' | 'query' | 'warn' | 'error';
// export type LogDefinition = {
//   level: LogLevel;
//   emit: 'stdout' | 'event';
// };

// //Note that for MongoDB, the params and duration fields will be undefined.

// export type QueryEvent = {
//   timestamp: Date;
//   query: string; // Query sent to the database
//   params: string; // Query parameters
//   duration: number; // Time elapsed (in milliseconds) between client issuing query and database responding - not only time taken to run query
//   target: string;
// };

// export type LogEvent = {
//   timestamp: Date;
//   message: string;
//   target: string;
// };
// export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';

// export type ProductFindUniqueArgs = {
//   where: ProductWhereUniqueInput;
//   select?: ProductSelect | null;
//   include?: ProductInclude | null;
// };

// export type UserFindFirstArgs = {
//   select?: XOR<UserSelect, null>;
//   include?: XOR<UserInclude, null>;
//   where?: UserWhereInput;
//   orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>;
//   cursor?: UserWhereUniqueInput;
//   take?: number;
//   skip?: number;
//   distinct?: Enumerable<UserDistinctFieldEnum>;
// };

// /*
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient({})

// async function main() {
//   const a = await prisma.post.create({
//     data: {
//       title: 'A test 1',
//     },
//   })

//   const b = await prisma.post.create({
//     data: {
//       title: 'A test 2',
//     },
//   })

//   const c = await prisma.post.findFirst({
//     where: {
//       title: {
//         startsWith: 'A test',
//       },
//     },
//     orderBy: {
//       title: 'asc',
//     },
//     take: -1, // Reverse the list
//   })
// }

// main()

// findMany returns a list of records.

// export type UserFindManyArgs = {
//   select?: XOR<UserSelect, null>
//   include?: XOR<UserInclude, null>
//   where?: UserWhereInput
//   orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
//   cursor?: UserWhereUniqueInput
//   take?: number
//   skip?: number
//   distinct?: Enumerable<UserDistinctFieldEnum>
// }

// create accepts the following input type:

// export type UserCreateArgs = {
//   select?: XOR<UserSelect, null>
//   include?: XOR<UserInclude, null>
//   data: XOR<UserCreateInput, UserUncheckedCreateInput>
// }

// Create multiple new records

// import { Prisma, PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient({ log: ['query'] })

// async function main() {
//   let users: Prisma.UserCreateInput[] = [
//     {
//       email: 'ariana@prisma.io',
//       name: 'Ari',
//       profileViews: 20,
//       coinflips: [true, false, false],
//       role: 'ADMIN',
//     },
//     {
//       email: 'elsa@prisma.io',
//       name: 'Elsa',
//       profileViews: 20,
//       coinflips: [true, false, false],
//       role: 'ADMIN',
//     },
//   ]

//   await Promise.all(
//     users.map(async (user) => {
//       await prisma.user.create({
//         data: user,
//       })
//     })
//   )
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

//   update

//   export type UserUpdateArgs = {
//   select?: XOR<UserSelect, null>
//   include?: XOR<UserInclude, null>
//   data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
//   where: UserWhereUniqueInput

//   const user = await prisma.user.update({
//   where: { id: 1 },
//   data: { email: 'alice@prisma.io' },
// })

// upsert

// upsert does the following:

// If an existing database record satisfies the where condition, it updates that record
// If no database record satisfies the where condition, it creates a new database record

// export type UserUpsertArgs = {
//   select?: XOR<UserSelect, null>
//   include?: XOR<UserInclude, null>
//   where: UserWhereUniqueInput
//   create: XOR<UserCreateInput, UserUncheckedCreateInput>
//   update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
// }

// const user = await prisma.user.upsert({
//   where: { id: 1 },
//   update: { email: 'alice@prisma.io' },
//   create: { email: 'alice@prisma.io' },
// })

// Unique key constraint errors on upserts
// Problem
// If multiple upsert operations happen at the same time and the record doesn't already exist, then one or more of the operations might return a unique key constraint error.

// Cause
// When Prisma does an upsert, it first checks whether that record already exists in the database. To make this check, Prisma performs a read operation with the where clause from the upsert operation. This has two possible outcomes, as follows:

// If the record does not exist, then Prisma creates that record.
// If the record exists, then Prisma updates it.
// When your application tries to perform two or more concurrent upsert operations, then a race condition might happen where two or more operations do not find the record and therefore try to create that record. In this situation, one of the operations succesfully creates the new record but the other operations fail and return a unique key constraint error.

// Database upsert query criteria
// Prisma Client uses a database upsert for an upsert query when the query meets the following criteria:

// There are no nested queries in the upsert's create and update options
// The query does not include a selection that uses a nested read
// The query modifies only one model
// There is only one unique field in the upsert's where option
// The unique field in the where option and the unique field in the create option have the same value
// If your query does not meet these criteria, then Prisma Client handles the upsert itself.

// model User {
//   id           Int    @id
//   profileViews Int
//   userName     String @unique
//   email        String

//   @@unique([id, profileViews])
// }

// prisma.user.upsert({
//   where: {
//     userName: 'Alice',
//   },
//   create: {
//     id: 1,
//     profileViews: 1,
//     userName: 'Alice',
//     email: 'alice@prisma.io',
//   },
//   update: {
//     email: 'updated@example.com',
//   },
// })

// prisma.User.upsert({
//   where: {
//     userName: 'Alice',
//     profileViews: 1,
//     id: 1,
//   },
//   create: {
//     id: 1,
//     profileViews: 1,
//     userName: 'Alice',
//     email: 'alice@prisma.io',
//   },
//   update: {
//     email: 'updated@example.com',
//   },
// })

// prisma.user.upsert({
//   select: {
//     email: true,
//     id: true,
//     posts: {
//       select: {
//         title: true,
//       },
//     },
//   },
//   where: {
//     userName: 'Alice',
//   },

//   create: {
//     id: 1,
//     profileViews: 1,
//     userName: 'Alice',
//     email: 'alice@prisma.io',
//   },
//   update: {
//     email: 'updated@example.com',
//   },
// })

// delete

// export type UserDeleteArgs = {
//   select?: XOR<UserSelect, null>
//   include?: XOR<UserInclude, null>
//   where: UserWhereUniqueInput
// }

// const user = await prisma.user.delete({
//   where: { id: 1 },
// })

// createMany

// export type UserCreateManyArgs = {
//   data: Enumerable<UserCreateManyInput>
//   skipDuplicates?: boolean
// }

// const users = await prisma.user.createMany({
//   data: [
//     { name: 'Sonali', email: 'sonali@prisma.io' },
//     { name: 'Alex', email: 'alex@prisma.io' },
//   ],
// })

// updateMany

// export type UserUpdateManyArgs = {
//   data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
//   where?: UserWhereInput
// }

// Examples

// const updatedUserCount = await prisma.user.updateMany({
//   where: { name: 'Alice' },
//   data: { name: 'ALICE' },
// })

// const deleteUser = await prisma.user.updateMany({
//   where: {
//     email: {
//       contains: 'prisma.io',
//     },
//     posts: {
//       some: {
//         likes: {
//           gt: 10,
//         },
//       },
//     },
//   },
//   data: {
//     role: 'USER',
//   },
// })

// deleteMany

// export type UserDeleteManyArgs = {
//   where?: UserWhereInput
// }

// const deletedUserCount = await prisma.user.deleteMany({})

// const deletedUserCount = await prisma.user.deleteMany({})

// count

// export type UserFindManyArgs = {
//   // select and include are excluded
//   where?: UserWhereInput
//   orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
//   cursor?: UserWhereUniqueInput
//   take?: number
//   skip?: number
//   distinct?: Enumerable<UserDistinctFieldEnum>
// }

// export type UserCountAggregateOutputType = {
//   id: number
//   name: number | null
//   email: number | null
//   profileViews: number
//   role: number | null
//   coinflips: number | null
//   testing: number | null
//   city: number | null
//   country: number | null
//   _all: number
// }

// Examples

// const result = await prisma.user.count()

// const result = await prisma.user.count({
//   where: {
//     post: {
//       some: {
//         published: true,
//       },
//     },
//   },
// })

// Use select to perform three separate counts

// The following query returns:

// A count of all records (_all)
// A count of all records with non-null name fields
// A count of all records with non-null city fields

// const c = await prisma.user.count({
//   select: {
//     _all: true,
//     city: true,
//     name: true,
//   },
// })

// aggregate

// export type UserAggregateArgs = {
//   where?: UserWhereInput
//   orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
//   cursor?: UserWhereUniqueInput
//   take?: number
//   skip?: number
//   distinct?: Enumerable<UserDistinctFieldEnum>
//   _count?: true | UserCountAggregateInputType
//   _avg?: UserAvgAggregateInputType
//   _sum?: UserSumAggregateInputType
//   _min?: UserMinAggregateInputType
//   _max?: UserMaxAggregateInputType
// }

// const minMaxAge = await prisma.user.aggregate({
//   _count: {
//     _all: true,
//   },
//   _max: {
//     profileViews: true,
//   },
//   _min: {
//     profileViews: true,
//   },
// })

// const setValue = await prisma.user.aggregate({
//   _sum: {
//     profileViews: true,
//   },
// })

// */
