const axios = require("axios");

exports.getAllBirdsByArea = (url) => {
	return axios.get(url).then((response) => {
		//console.log(response.data.body);
		return JSON.parse(response.data.body);
	});
};
