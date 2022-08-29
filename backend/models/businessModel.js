import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = require('./userModel')
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'Businesss',
           },
   },
  {
    timestamps: true,
  }
)

 const businessSchema = mongoose.Schema(
   {
     name: {
       type: String,
       required: true,
     },
     email: {
       type: String,
       required: true,
       unique: true,
     },
     phone: {
       type: String,
       required: true,
     },
     adress: {
       type: String,
       required: false,
     },
     reviews: [reviewSchema],
     rating: {
       type: Number,
       required: true,
       default: 0,
     },
     numReviews: {
       type: Number,
       required: true,
       default: 0,
     },
     employee: [userSchema]
   },
   {
     timestamps: true,
   }
 )

 const Business = mongoose.model('Business', businessSchema)



 export default Business