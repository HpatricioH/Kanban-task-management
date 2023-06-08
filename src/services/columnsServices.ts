import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// create a new column in the database for a specific board
export const createColumn = async (name:string, boardId:string) => {
  return await prisma.columns.create({
    data: {
      name,
      boardId
    },
    include: {
      tasks: true
    }
  })
}

// delete a column in the database
export const deleteColumn = async (id:string) => {
  return await prisma.columns.delete({
    where: {
      id
    }
  })
}
