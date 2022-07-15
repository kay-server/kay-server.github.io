$.get("https://ipinfo.io", function(response) {
    switch(response.country) {
        case "UA":
        case "AU":
        case "CH":
        case "AT":
        case "CA":
        case "US":
            blocked(response.country);break;
    }
}, "jsonp");

function blocked(c) {
    location="/block?src=" + c;
}