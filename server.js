const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 3001
const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {useNewUrlParser:true, useUnifiedTopology: true}).catch(error => console.log(error));


app.listen(PORT, (`The app has successfully connected and is running on port ${PORT}`))