import express from 'express'
import * as columnControllers from '../../controllers/columnsControllers'

export const columnRouter = express.Router()

columnRouter.post('/', columnControllers.createColumn)
columnRouter.put('/:id', columnControllers.updateColumn)
columnRouter.delete('/:id', columnControllers.deleteColumn)
