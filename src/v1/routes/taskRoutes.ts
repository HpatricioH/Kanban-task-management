import express from 'express'
import * as taskController from '../../controllers/taskController'

export const taskRouter = express.Router()

taskRouter.post('/', taskController.createTask)
