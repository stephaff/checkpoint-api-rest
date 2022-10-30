const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userModel = new Schema({
    nom : {
        type : String,
        required : true
    },
    commune : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true
    }
}, { timestamps : true })

module.exports = mongoose.model('User', userModel)