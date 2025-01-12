const express = require('express')
const connect = require('./config/db')
const todRoutes = require('./routes/todoRoutes')
const cors = require('cors')

const app = express()

require('dotenv').config()

const port = process.env.port || 3560

connect()

app.use(cors())
app.use(express.json())
app.use('/api',todRoutes)

app.listen(port,()=>{
    console.log(`we are listening our server at ${port}`)
})