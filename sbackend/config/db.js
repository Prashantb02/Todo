const mongoose = require('mongoose')

function connect(){
    try{
        mongoose.connect('mongodb://localhost:27017/udu')
        console.log('we have successfully connected to the database!!')
    }catch(error){
        console.log(error)
    }
}

module.exports= connect