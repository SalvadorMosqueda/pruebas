const  mongoose = require( "mongoose")

let schemaLibros = new mongoose.Schema({
    codigo: {
        type: mongoose.Schema.Types.ObjectId,
                ref:'libros'
        },
    ingresos: 
        Number,

    cantidad: 
            Number,     
    sucursal:{
             type: mongoose.Schema.Types.ObjectId,
                ref:'Sucursal'
            },
        
    },{
        versionKey:false
    })

module.exports = mongoose.model('ventas',schemaLibros,'ventas')