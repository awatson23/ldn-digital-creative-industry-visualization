var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
	first_name:String,
	last_name:String,
    school_name:String,
    graduation_year:Date,
    jobtitle:String,
    company_name:String,
    frameworks:{framework1:String, framework2:String, framework3:String, framework4:String, framework5:String},

    frontends:{frontend1:String, frontend2:String, frontend3:String, frontend4:String, frontend5:String, frontend6:String},

    backends:{backend1:String, backend2:String, backend3:String, backend4:String, backend5:String, backend6:String, backend7:String}
},
{collection:'vizinputdata'});

module.exports = mongoose.model('Data', dataSchema);