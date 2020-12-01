const url 		= "https://blockchain.info/ticker";

function actualiserPrix() {
	const req 	= new XMLHttpRequest();
	const method 	= 'GET';
	
	req.open(method, url);
	req.onreadystatechange = function(event) {
		if (this.readyState === XMLHttpRequest.DONE) {
			if (this.status === 200) {
				const response = JSON.parse(this.responseText);
				document.getElementById("price_label_dollars").textContent = response.EUR.buy;
				document.getElementById("price_label_euros").textContent = response.USD.buy;
			} else {
				console.log("status :" + this.status);
				alert("Quelque chose semble ne pas fonctionner, veuillez réessayer plus tard");
			}
		}
	}
	console.log("prix actualisé");
	req.send();
}

window.setInterval(actualiserPrix, 1000);
