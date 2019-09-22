const app = new Vue({
	el: '#app',
	data: {
		message: 'Again',
		apiToken: null
	},
	methods: {
		getSummary(token) {
			const apiEndpointPath = 'summary';
			const requestHeaders = new Headers({
				'Wanikani-Revision': '20170710',
				Authorization: `Bearer ${token}`
			});
			const apiEndpoint = new Request(
				`https://api.wanikani.com/v2/${apiEndpointPath}`,
				{
					method: 'GET',
					headers: requestHeaders
				}
			);

			fetch(apiEndpoint)
				.then(response => response.json())
				.then(responseBody => console.log(responseBody));
		}
	}
});
