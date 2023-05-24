import express, { Request, Response, NextFunction } from 'express'
// import cors from 'cors'
import dotenv from 'dotenv'
const bodyParser = require('body-parser')

dotenv.config()

const app = express()
const PORT = parseInt(process.env.PORT as string, 10) || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(statusCode).json({ message: err.message })
})

// // Middleware
// app.use(cors())

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`)
})
