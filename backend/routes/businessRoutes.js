import express from 'express'
import {
    getBusiness, 
    getBusinessById,  
    createBusinessReview
} from '../controllers/businessController.js'
import { protect } from '../middleware/authMiddleware.js'


 const router = express.Router()

 
 router.route('/').get(getBusiness).post(protect)
 router.route('/:id/reviews').post(protect, createBusinessReview)
 router.route('/:id').get(getBusinessById).put(protect)
 

 

 export default router