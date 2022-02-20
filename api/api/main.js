$('body').terminal({
	get: function (url) {
		this.echo('\n' + httpGet(url) + '\n');
	},
	echo: function (text) {
		this.echo(text);
	},
	title: function (text) {
		document.title = text;
	}
}, {
	greetings: 'Kay Software\n'
});

function httpGet(theUrl)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}
function sleep(delay) {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}