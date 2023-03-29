const token = "2y7ySxUyVyp8qJ1bmD3ZtZDvbIsgEAcsu8bKnq1w4=";
export function fetchPostPublico(data,url){
	return new Promise( (resolve, reject) => {
		data["tokenapp"] = token;
		const backurl = "http://127.0.0.1:8000/api/";
		fetch(backurl+url, {
	  		method: 'POST', // or 'PUT'
	  		headers: {
	    		'Content-Type': 'application/json',
	  		},
	  		body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then((responseJson) => {
			resolve(responseJson);
		})
		.catch((error) => {
			reject(error);
		})
	})
} // End function fetchPostPublico

export function fetchGetPublico(url){
	return new Promise( (resolve, reject) => {
		const backurl = "http://127.0.0.1:8000/api/";
		fetch(backurl+url+'?tokenapp='+token, {
	  		method: 'GET', // or 'PUT'
	  		headers: {
	    		'Content-Type':'application/json',
	    		'Authorization':'Bearer '+sessionStorage.getItem('tokenauth')
	  		},
		})
		.then(response => response.json())
		.then((responseJson) => {
			resolve(responseJson);
		})
		.catch((error) => {
			reject(error);
		})
	})
} // End function fetchGetPublico