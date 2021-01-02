const express = require('express')
const os = require('os')
require('dotenv').config()
const bodyParser = require('body-parser')

const checkoutRoutes = require('./Routes/checkoutRoutes')

const app = express()
const path = require('path')
const cors = require('cors')
const stripe = require('stripe')("sk_test_51I1tROH4Fx9PpKbYkjQZWY6Wc1Qp9M14jyGyK20MZLRYRQ4fKqIzjWmApaGHwbYQRLkFKxXKYhoSgXbavFuMZHNe00akukkrIW")
const uuid = require('uuidv4')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
app.use(checkoutRoutes)

app.get('/api/getUsername', (req, res) => res.send({ username: 'aoyyy' }));



app.use(checkoutRoutes)

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));

// app.post('/payment', (req, res) => {
//   const {product, token} = req.body
//   console.log('product', product);
//   console.log('token', token);
//   const idempotencyKey = uuid()

//   return stripe.customers.create({
//     email: token.email,
//     source: token.id
//   }).then((customer) => {
//      stripe.charges.create({
//        amount: product.price,
//        currency: 'usd',
//        customer: customer.id,
//        receipt_email: token.email,
//        description: product.name  
//      }, {idempotencyKey} )
//   }).then(result => res.status(200).json(result))
//   .catch(err => console.log('Error:', err))
// })
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('public'))
}
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
