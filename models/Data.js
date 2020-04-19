var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
	first_name:String,
	last_name:String,
    school_name:String,
    graduation_year:Number,
    jobtitle:String,
    company_name:String
},
{collection:'vizinputdata'});

module.exports = mongoose.model('Data', dataSchema);