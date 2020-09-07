const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    username : {
        type : String ,
        minlength : 3,
        required : true,
        trim : true ,
        unique : true    
    }
},{
    timestamps : true
});

const user = mongoose.model('User', userSchema);

module.exports = user ;