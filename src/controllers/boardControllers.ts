import { Request, Response } from 'express'
import * as boardService from '../services/boardServices'

export const createBoard = async (req: Request, res: Response) => {
  try {
    const { name } = req.body
    if (!name) return res.status(400).json({ message: 'Name is required' })
    const board = await boardService.createBoard(name)
    return res.status(201).json(board)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
