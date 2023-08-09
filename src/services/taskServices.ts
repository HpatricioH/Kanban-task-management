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

// update a task in the database for a specific column
export const updateTask = async (id: string, title: string, description: string, status: string) => {
  return await prisma.tasks.update({
    where: {
      id
    },
    data: {
      title,
      description,
      status
    },
    include: {
      subTasks: true
    }
  })
}

// delete task from the database
export const deleteTask = async (id: string) => {
  return await prisma.tasks.delete({
    where: {
      id
    }
  })
}
