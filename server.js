const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routes = require('./routes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {useNewUrlParser:true, useUnifiedTopology: true}).catch(error => console.log(error));


app.listen(PORT, () => {
    console.log(`The app is listening on Port ${PORT}`)
})

