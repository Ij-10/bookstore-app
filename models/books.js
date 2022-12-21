const mongoose = require('mongoose')

//define a schema
const Schema = mongoose.Schema

//define book schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    shortDescription: {
        type: String,
        required: false
    },

    longDescription: {
        type: String,
        required: false,
    },

    year: {
        type: Number,
        required: true,
        max: [2022, 'Year must be less than or equal to 2020']
    },

    isbn: {
        type: Number,
        required: true,
        unique: [true, 'ISBN must be unique']
    },

    price: {
        type: Number,
        required: true,
        min: [0, 'price must be greater than or equal to 0']
    },

    createAt: {
        type: Date,
        default: Date.now
    },

    lastUpdateAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Books', BookSchema)

