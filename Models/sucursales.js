const  mongoose = require( "mongoose")

let schemaSucursales = new mongoose.Schema({
    name: String,
    almacen: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Libros",
        },
    ]
    },{
        versionKey:false
    })

module.exports = mongoose.model('Sucursales',schemaSucursales,'Sucursales')