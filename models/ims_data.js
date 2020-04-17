var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
	last_name:String,
	first_name:String,
    gradyear:Number,
	prev_school:String,
    title:String,
	role:String,
    workyears:Number,
	hired_after_grad_months:Number,
    curr_city:String,
	curr_company:String,
    prov:String,
	num_positions:Number,
    industry:String,
	post_school:String,
    num_companies:Number,
	ind_years:Number,
    reactr:String,
    status:String,
    curr_country:String
},
{collection:'imsdata'});

module.exports = mongoose.model('ims_data', dataSchema);