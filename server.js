const express = require('express')
require('dotenv').config() // confug settings to access the variable on .env file

const cors = require('cors') // cross origi resource sharing ( to avoid CORS Effect )

const PORT = process.env.PORT

const app = express()

// template engine settings
app.set('view engine', 'ejs')
app.set('views', './view')

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

// index route 
app.use(`/`, require('./route/user_route'))

// server call
app.listen(PORT, () => {
    console.log(`server is started and running @ http://localhost:${PORT}`)
})