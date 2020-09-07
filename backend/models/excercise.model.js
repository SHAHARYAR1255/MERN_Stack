const mongoose = require('mongoose');

const excerciseSchema = new mongoose.Schema({
    username : {required :true ,type: String },
    description : {required : true, type: String} ,
    duration : {required: true , type : Number},
    date : {required : true , type : Date}
},{
    timestamps: true
});

const Exercise = mongoose.model('Excercise', excerciseSchema);
module.exports = Exercise;