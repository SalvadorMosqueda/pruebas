const  mongoose = require( "mongoose")

let schemaCategories = new mongoose.Schema({
    name:String,
    },)

module.exports = mongoose.model('Categories',schemaCategories,'Categories')