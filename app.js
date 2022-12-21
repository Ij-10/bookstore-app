const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const dbConnect = require('./db/mongodb')
const app = express()

//mongodb connection 
dbConnect()

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    res.send('Your server is working..')
})





app.listen(config.PORT, () => {
    console.log(`server is listening on port: ${config.PORT}`);
})
