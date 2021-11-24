const mongoose = require('mongoose');

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const user = mongoose.Schema({
    firstName : {
        type: String,
        minLength:2,
        unique: true,
        required:true,
    },
    lastName : {
        type: String,
        unique: true,
        minLength:2,
        required:true,
    },
    birthday:{
        type: Date, 
        required:true,  
    },
    email:{
        type:String,
        trim: true, 
        required:true,
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    contuct:{
        type:Number,
        minLength:10,
        required:true,
    },
    address : {
        type:String,
        required:true,
    }
}, {timestamps: true})

module.exports = mongoose.model('registerUser' , user)