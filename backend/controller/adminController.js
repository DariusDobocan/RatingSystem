import User from '../models/userModel.js'
import Business from '../models/businessModel.js'

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(user) {
        user.DeleteMany(x => x.id == user.id)
        res.status(201).json({ message: 'User deleted' })
    }
    else {
        res.status(404)
        throw new Error('User not found')
      }
  })

  const deleteBusiness = asyncHandler(async (req, res) => {
    const business = await Business.findById(req.params.id)

    if(business) {
        business.DeleteMany(x => x.id == business.id)
        res.status(201).json({ message: 'Company deleted' })
    }
    else {
        res.status(404)
        throw new Error('Company not found')
      }
  })

  export { deleteBusiness, deleteUser}