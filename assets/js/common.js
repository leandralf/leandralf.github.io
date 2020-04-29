function messageSent() {
	l = window.location.href;
	if (l.indexOf("#mensagem-enviada") !== -1) {
		var element = document.getElementById('message-sent');
		element.style.display = "block";
	}
}
function hideMessage() {
	var element = document.getElementById('message-sent');
	element.style.display = "none";
}

messageSent();
