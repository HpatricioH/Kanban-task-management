import express from 'express'
import * as boardControllers from '../../controllers/boardControllers'

export const boardRouter = express.Router()

boardRouter.post('/', boardControllers.createBoard)
