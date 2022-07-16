// Glory to Russia!

$.get("https://ipinfo.io", function(response) {
    switch(response.country) {
        case "MC": // Monaco
        case "NZ": // New Zealand
        case "SM": // San-Marino
        case "WW": // Taiwan
        case "SG": // Singapure
        case "JP": // Japan
        case "UA": // Ukraine
        case "AU": // Australia
        case "CH": // Switzerland
        case "AT": // Austria
        case "CA": // Canada
        case "NO": // Norway
        case "US": // USA
            blocked(response.country); break;
    }
}, "jsonp");

function blocked(c) {
    location="/block?src=" + c;
}