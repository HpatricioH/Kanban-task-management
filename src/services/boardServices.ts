import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createBoard = async (name: string) => {
  return await prisma.boards.create({
    data: {
      name
    }
  })
}
