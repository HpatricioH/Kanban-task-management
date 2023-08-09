import express from 'express'
import * as taskController from '../../controllers/taskController'

export const taskRouter = express.Router()

taskRouter.post('/', taskController.createTask)
taskRouter.put('/task/:id', taskController.updateTask)
taskRouter.delete('/:id', taskController.deleteTask)
