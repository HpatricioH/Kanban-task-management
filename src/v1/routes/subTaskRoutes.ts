import express from 'express'
import * as subTaskController from '../../controllers/subTaskController'

export const subTaskRouter = express.Router()

subTaskRouter.post('/', subTaskController.createSubTask)
subTaskRouter.put('/task/:taskId/subtask/:id', subTaskController.updateSubTask)
subTaskRouter.delete('/:id', subTaskController.deleteSubTask)
