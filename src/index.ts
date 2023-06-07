import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { boardRouter } from './v1/routes/boardRoutes'
import { columnRouter } from './v1/routes/columnsRoutes'
import { taskRouter } from './v1/routes/taskRoutes'
import { subTaskRouter } from './v1/routes/subTaskRoutes'

const bodyParser = require('body-parser')

dotenv.config()

const app = express()
const PORT = parseInt(process.env.PORT as string, 10) || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

// Routes
app.use('/api/v1/boards', boardRouter)
app.use('/api/v1/columns', columnRouter)
app.use('/api/v1/tasks', taskRouter)
app.use('/api/v1/subtasks', subTaskRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(statusCode).json({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`)
})

export default app
