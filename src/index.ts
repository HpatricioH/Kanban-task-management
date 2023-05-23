import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
