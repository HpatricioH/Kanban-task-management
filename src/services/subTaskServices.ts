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
