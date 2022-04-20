fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        if (payload.location.country.name.includes("\"UA\"")) {
            from_ukr();
        }
    });

function from_ukr() {
    alert("Kay Software перестал работать на территории вашей страны. Клиенты из Украины на данный момент не обслуживаются. За подробностями обратитесь в тех. поддержку.")
}