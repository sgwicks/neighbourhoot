const axios = require("axios");

exports.getAllBirdsByArea = (url) => {
	return axios
		.get(url)
		.then((response) => {
			return JSON.parse(response.data.body);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getBirdsToPopulateMap = () => {
	return axios
		.get("https://api.ebird.org/v2/data/obs/GB/recent", {
			headers: { "X-eBirdApiToken": "4dke8miqalko" },
		})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
