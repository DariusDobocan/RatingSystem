import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import businessRoutes from './routes/businessRoutes.js'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import morgan from 'morgan'


dotenv.config()

connectDB()



 const app = express()

 if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

 app.use(express.json())

 app.get('/', (req, res) => {
   res.send('API is running...')
 })


 app.use('/api/busineses', businessRoutes)
 app.use('/api/users', userRoutes)
 app.use('/api/admin', adminRoutes)
 app.use(notFound)
 app.use(errorHandler)

 
 app.listen(5000, console.log('Server running on port 5000'))