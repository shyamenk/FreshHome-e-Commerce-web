import { PrismaClient } from 'prisma/prisma-client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({});

// If you want the query to throw an error if the record is not found, then consider using findFirstOrThrow instead.

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
