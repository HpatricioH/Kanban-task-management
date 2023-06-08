import { Request, Response } from 'express'
import * as boardService from '../services/boardServices'

export const getBoards = async (req: Request, res: Response) => {
  try {
    const boards = await boardService.getBoards()
    return res.status(200).json(boards)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const createBoard = async (req: Request, res: Response) => {
  try {
    const { name } = req.body

    // validations
    if (!name) return res.status(400).json({ message: 'Name is required' })

    const board = await boardService.createBoard(name)
    return res.status(201).json(board)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateBoard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name } = req.body

    // validations
    if (!id) return res.status(400).json({ message: 'ID is required' })
    if (!name) return res.status(400).json({ message: 'Name is required' })

    const board = await boardService.updateBoard(id, name)
    return res.status(200).json(board)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteBoard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    // validations
    if (!id) return res.status(400).json({ message: 'ID is required' })

    await boardService.deleteBoard(id)
    return res.status(200).json({ message: 'Board Deleted Successfully' })
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
