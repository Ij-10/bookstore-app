const mongoose = require('mongoose')
const config = require('../config/config')

function dbConnect(){
    mongoose.connect(config.MONGO_URL)

    //check if connection worked
    mongoose.connection.on('connected', () => {
        console.log('Mongodb connected successfully...');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Mongodb connected unsuccessfully...');
        console.log(error);
    })
}


module.exports = dbConnect