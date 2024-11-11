const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
  params: {q: 'chicken soup'},
  headers: {
    'X-RapidAPI-Key': 'cac60e4d3bmshf989b0cdce0429dp16fc93jsn0bef2f4f9ea5',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}