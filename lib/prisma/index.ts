import { PrismaClient } from 'prisma/prisma-client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    errorFormat: 'pretty',
    rejectOnNotFound: {
      findUnique: {
        Product: (err) => new Error('User error', err),
        Category: (err) => new Error('Post error!', err)
      },
      findFirst: {
        Product: (err) => new Error('User error', err),
        Category: (err) => new Error('Post error!', err)
      }
    },
    //Use select and include to determine which fields to return.
    log: [
      { level: 'warn', emit: 'event' },
      { level: 'info', emit: 'event' },
      { level: 'error', emit: 'event' }
    ]
  });

// If you want the query to throw an error if the record is not found, then consider using findFirstOrThrow instead.

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
