import { Request, Response } from 'express'
import * as subTaskService from '../services/subTaskServices'

const dataError = [{
  message: 'Title is required',
  internal_code: 'missing_data'
}, {
  message: 'Is Completed is required',
  internal_code: 'missing_data'
}
]

export const createSubTask = async (req: Request, res: Response) => {
  try {
    const { title, isCompleted, taskId } = req.body

    switch (true) {
      case !title:
        return res.status(400).json(dataError[0])
      case isCompleted === undefined:
        return res.status(400).json(dataError[1])
    }

    const subTask = await subTaskService.createSubTask(title, isCompleted, taskId)
    return res.status(201).json(subTask)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateSubTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, isCompleted } = req.body

    switch (true) {
      case !title:
        return res.status(400).json(dataError[0])
      case isCompleted === undefined:
        return res.status(400).json(dataError[1])
    }

    const subtaskUpdated = await subTaskService.updateSubTask(id, title, isCompleted)

    return res.status(200).json(subtaskUpdated)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteSubTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const subTask = await subTaskService.deleteSubTask(id)
    return res.status(200).json(subTask)
  } catch (error:any) {
    return res.status(500).json({ message: error.message })
  }
}
