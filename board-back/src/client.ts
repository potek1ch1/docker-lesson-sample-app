import { PrismaClient } from '@prisma/client';

// グローバルスコープを拡張
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Prismaクライアントのインスタンスを生成または再利用
export const prisma =
  globalForPrisma.prisma || new PrismaClient();

// 開発環境ではグローバルスコープに保存
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;