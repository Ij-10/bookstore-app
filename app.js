const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const app = express()

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    res.send('Your server is working..')
})





app.listen(config.PORT, () => {
    console.log(`server is listening on port: ${config.PORT}`);
})
