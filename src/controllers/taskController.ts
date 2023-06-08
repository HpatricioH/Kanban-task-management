import { Request, Response } from 'express'
import * as taskService from '../services/taskServices'

const dataError = [{
  message: 'Title is required',
  internal_code: 'missing_data'
}, {
  message: 'Status is required',
  internal_code: 'missing_data'
}, {
  message: 'ColumnId is required',
  internal_code: 'missing_data'
}]

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, columnId } = req.body

    switch (true) {
      case !title:
        return res.status(400).json(dataError[0])
      case !status:
        return res.status(400).json(dataError[1])
      case !columnId:
        return res.status(400).json(dataError[2])
    }

    const task = await taskService.createTask(title, description, status, columnId)
    return res.status(201).json(task)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const subTask = await taskService.deleteTask(id)
    return res.status(200).json(subTask)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
