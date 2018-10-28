if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Cache Successsfully Registered!......');
	})
	.catch(function() {
		console.log('Cacje Registration Failed!.....');
	});
}
