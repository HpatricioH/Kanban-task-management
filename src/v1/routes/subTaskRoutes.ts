import express from 'express'
import * as subTaskController from '../../controllers/subTaskController'

export const subTaskRouter = express.Router()

subTaskRouter.post('/', subTaskController.createSubTask)
