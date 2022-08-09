const  mongoose = require( "mongoose")

const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    tipo:{
        type:String,

},
})
    
module.exports = mongoose.model('Usuario',usuarioSchema)