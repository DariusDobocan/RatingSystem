import express from 'express'
import {
    deleteBusiness, 
    deleteUser
} from '../controllers/adminController.js'
import { protect } from '../middleware/authMiddleware.js'


 const router = express.Router()

 router.route('/:id/deleteUser').post(protect, deleteUser)
 router.route('/:id/deleteUser').post(protect, deleteBusiness)
 

 

 export default router