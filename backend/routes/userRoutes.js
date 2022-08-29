import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  createUserReview,
  getUsers,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

 const router = express.Router()

 router.route('/').post(registerUser).get(protect, admin, getUsers)
 router.post('/login', authUser)
 router.route('/:id/reviews').post(protect, createUserReview)
 router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
 

 export default router