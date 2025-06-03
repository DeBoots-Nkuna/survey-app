import { apiRouter } from './routes/surveyRoutes.js'
import { connectionPool } from './config/dbConnection.js'
import express from 'express'
import cors from 'cors'

//setting up server
const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)
const PORT = 8000

//setting up database connection
try {
  const connection = await connectionPool.getConnection()
  console.log('Connected to MySQL DB')
  connection.release()
} catch (error) {
  console.log('Connection error : ', error)
}

app.use(express.json())

//registering api routes
app.use('/api/surveys', apiRouter)
// handling unknown routes
app.use((req, res) => {
  res.statusCode = 404
  res.json({ message: 'Endpoint not found.' })
})

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
)
