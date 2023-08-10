import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// create a new subTask in the database for a specific task
export const createSubTask = async (title: string, isCompleted: boolean, taskId: string) => {
  return await prisma.subTasks.create({
    data: {
      title,
      isCompleted,
      taskId
    }
  })
}

// update a subTask in the database for a specific task
export const updateSubTask = async (id: string, title: string, isCompleted: boolean) => {
  return await prisma.subTasks.update({
    where: {
      id
    },
    data: {
      title,
      isCompleted
    }
  })
}

// delete subTask from the database
export const deleteSubTask = async (id: string) => {
  return await prisma.subTasks.delete({
    where: {
      id
    }
  })
}
