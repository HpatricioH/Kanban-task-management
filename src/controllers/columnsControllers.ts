import { Request, Response } from 'express'
import * as columnService from '../services/columnsServices'

export const createColumn = async (req: Request, res: Response) => {
  try {
    const { name, boardId } = req.body
    if (!name) return res.status(400).json({ message: 'Name is required' })
    if (!boardId) return res.status(400).json({ message: 'Board ID is required' })
    const column = await columnService.createColumn(name, boardId)
    return res.status(201).json(column)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
