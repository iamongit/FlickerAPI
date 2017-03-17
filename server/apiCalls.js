var request = require('request');

module.exports = {
	getFlickerWoe: function(option, callback){
		request(option, function(error, response, body){
			if(error){
				console.log(error, 'error in  get request');
				// throw new Error(error);
			} else {
				var responseOnject = JSON.parse(body);
				console.log(" I am HERERERERERE")
				console.log(responseOnject)
				callback(responseOnject);
			}
		})
	}
}