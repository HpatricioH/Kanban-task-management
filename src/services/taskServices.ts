import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// create a new task in the database for a specific column
export const createTask = async (title: string, description: string, status: string, columnId: string) => {
  return await prisma.tasks.create({
    data: {
      title,
      description,
      status,
      columnId
    },
    include: {
      subTasks: true
    }
  })
}
