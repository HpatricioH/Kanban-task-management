import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// get all boards from the database
export const getBoards = async () => {
  return await prisma.boards.findMany({
    include: {
      columns: {
        include: {
          tasks: {
            include: {
              subTasks: true
            }
          }
        }
      }
    }
  })
}

// create a new board in the database
export const createBoard = async (name: string) => {
  return await prisma.boards.create({
    data: {
      name
    }
  })
}

// update a board in the database
export const updateBoard = async (id: string, name: string) => {
  return await prisma.boards.update({
    where: {
      id
    },
    data: {
      name
    }
  })
}

// delete a board from the database
export const deleteBoard = async (id: string) => {
  return await prisma.boards.delete({
    where: {
      id
    }
  })
}
