const  mongoose = require( "mongoose")

let schemaLibros = new mongoose.Schema({
    title: String,
    categoria: { type: mongoose.Schema.Types.ObjectId,
        ref:'Categories'
        },
    price: 
        Number,
        
    cantidad: 
            Number,
    codigo:
            Number,
            
    sucursal:{
             type: mongoose.Schema.Types.ObjectId,
                ref:'Sucursal'
            },
        
    },{
        versionKey:false
    })

    module.exports = mongoose.model('libros',schemaLibros)