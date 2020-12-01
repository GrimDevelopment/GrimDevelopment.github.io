const url = "https://blockchain.info/ticker";

function actualiserPrix() {
	const req = new XMLHttpRequest();
	const method = 'GET';
	
	req.open(method, url);
	req.onreadystatechange = function(event) {
		if (this.readyState === XMLHttpRequest.DONE) {
			if (this.status === 200) {
				const response = JSON.parse(this.responseText);
				document.getElementById("price_label_usd").textContent = response.USD.buy;
			} else {
				console.log("status :" + this.status);
			}
		}
	}
	console.log("prix actualisé");
	req.send();
}

window.setInterval(actualiserPrix, 1000);
