import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getBoards = async () => {
  return await prisma.boards.findMany()
}

export const createBoard = async (name: string) => {
  return await prisma.boards.create({
    data: {
      name
    }
  })
}

export const deleteBoard = async (id: string) => {
  return await prisma.boards.delete({
    where: {
      id
    }
  })
}
