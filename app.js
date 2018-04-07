let getResults = function(loc, icon, weather) {
	return {
		location: loc,
		iconUrl: icon,
		weather: weather
	}
}

let createHTML = function(results) {
	var forecast = document.getElementById("forecast")
	forecast.innerHTML = `<h2>${results.location}</h2><img src="${results.iconUrl}" /><p>${results.weather}</p>`
}

var submitButton = document.getElementById('submit-btn');
console.log(submitButton)



let checkAnswer = function(e) {
	let state = document.getElementById('state').value;
	let city = document.getElementById('city').value;
	var surveyAnswer = makeRequest(city, state);
}

submitButton.addEventListener('click', checkAnswer);

let makeRequest = function(city, state) {
	let url = `http://api.wunderground.com/api/4d8be7644e11333b/conditions/q/${state}/${city}.json`;
	console.log(url)
	fetch(url)
		.then(function(res) { 
			return res.json() 
		})
		.then(body => {
			var c_o = body.current_observation;
			var results = getResults(c_o.display_location.full, c_o.icon_url, c_o.weather)

			createHTML(results)
		})
}
