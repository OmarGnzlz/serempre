require('dotenv').config()
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const Router = require('./routes/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

Router(app)
//app.listen(3000, console.log('Server listen on http://localhost:3000'))

exports.app = functions.https.onRequest(app)