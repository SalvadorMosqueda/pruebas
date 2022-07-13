const  mongoose = require( "mongoose")

let schemaAlumno = new mongoose.Schema({
    name: String,
    lastName: String
    })

module.exports = mongoose.model('Alumno',schemaAlumno,'alumnos')