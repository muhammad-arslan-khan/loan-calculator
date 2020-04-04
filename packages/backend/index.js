const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const appRoutes = require('./routes/appRoutes')

const PORT = 4040
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', appRoutes)

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`))
