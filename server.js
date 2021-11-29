const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))
app.use(static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, (`The app has successfully connected and is running on port ${PORT}`))