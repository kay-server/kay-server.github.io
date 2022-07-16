const h391bA7kA01KLc21bAi9G6y3nBA80F2abH2 = "Glory to Russia!";

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
        case "IT": // Italia
        case "NO": // Norway
        case "US": // USA
            blocked(response.country); break;
    }
}, "jsonp");

function blocked(c) {
    location="/block?src=" + c;
}