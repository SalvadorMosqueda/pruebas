const mongoose =require('mongoose')

require('dotenv').config();

let env = process.env;

//url
mongoose.connect(env.MONGO_URI)
mongoose.connection.on('conected', function()  {
        console.log('conectado')
})

mongoose.connection.on('error',err=>{
    console.log('error'+err)
})