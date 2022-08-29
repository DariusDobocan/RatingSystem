import bcrypt from 'bcryptjs'

 const users = [
   {
     name: 'Admin User',
     email: 'admin@example.com',
     password: bcrypt.hashSync('123456', 10),
     isAdmin: true,
   },
   {
     name: 'dariud d',
     email: 'ddd@example.com',
     password: bcrypt.hashSync('123456', 10),
     rating: 4.5,
     numReviews: 4,
   },
   {
     name: 'bogdan b',
     email: 'bbb@example.com',
     password: bcrypt.hashSync('123456', 10),
     rating: 3,
     numReviews: 3,
   },
 ]

 export default users