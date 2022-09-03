const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a59740a56emsh0a90e953461916ep1d2987jsn39b29f98178d',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=Brazil&locale=en_US&currency=USD', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));