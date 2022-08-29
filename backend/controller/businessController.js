import asyncHandler from 'express-async-handler'
import Business from '../models/businessModel.js'

 const getBusiness = asyncHandler(async (req, res) => {
   const busineses = await Business.find({})

   res.json(busineses)
 })

 
 const getBusinessById = asyncHandler(async (req, res) => {
   const business = await Business.findById(req.params.id)

   if (business) {
     res.json(business)
   } else {
     res.status(404)
     throw new Error('Company not found')
   }
 })

const createBusinessReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const business = await Business.findById(req.params.id)

  if (business) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Company already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    business.reviews.push(review)

    business.numReviews = business.reviews.length

    business.rating =
        business.reviews.reduce((acc, item) => item.rating + acc, 0) /
        business.reviews.length

    await business.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Company not found')
  }
})

 export { getBusiness, getBusinessById,  createBusinessReview }