import express from 'express'
import * as boardControllers from '../../controllers/boardControllers'

export const boardRouter = express.Router()

boardRouter.get('/', boardControllers.getBoards)
boardRouter.post('/', boardControllers.createBoard)
boardRouter.put('/:id', boardControllers.updateBoard)
boardRouter.delete('/:id', boardControllers.deleteBoard)
