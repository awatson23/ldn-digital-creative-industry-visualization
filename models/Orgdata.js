var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
	company_name:String,
    company_address:String,
    company_summary:String,
    establishment_date:String,
    industry_sector:String
},
{collection:'orginputdata'});

module.exports = mongoose.model('Orgdata', dataSchema);