async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Los%20Angeles&minDate=2023-11-03&maxDate=2023-11-04&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42d46c9af9msha3c189b9f0890bfp17d7a7jsn05e77d185125',
		'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
fetchData();