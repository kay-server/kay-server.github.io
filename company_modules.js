const h391bA7kA01KLc21bAi9G6y3nBA80F2abH2 = "Glory to Russia!";

const API = {ClientInfo() {return "https://" + "ipinfo.io";}}
const Kick = {RegionalBlock(c) {location="/block?src=" + c;}}
const Features = {
    UpdateSubTitle() {
        try {
            var el = document.getElementById("sub");
            if (el) {
                el.innerHTML = "\"" + phrs[Features.PsRand(0, phrs.length)] + "\"";
            }
        } catch(e) {}
    },
    PsRand(a, b) {return a + Math.floor(Math.random() * b);}
}

    // Фразы
    const phrs = [
    "Слава усраине! Хероям в срало!",
    "Vладимир ZZZеленский!",
    "Дави укро-нацистов как gовно!",
    "В. Зеленский прокурил весь бюджет Украины",
    "Как там поживает Украинская область?",
    "Украинцы, что с лицами?",
    "Заснул в Украине, проснулся в РФ",
    "Крым наш!",
    "Украинский - шуточный Русский",
    "Меняйте гривны на рубли пока не поздно!",
    "Слёзы/Моча - говорит о многом.",
    "Белый, Синий, Красный - флаг мира",
    "Куплю Киев, недорого",
    "Слава России!",
    "Слава Российской империи!",
    "Украинцы, где ваш обещанный DDoS?",
    "Работайте, братья!",
    "Слышу зов прибить азов!",
    "Бойтесь нас!",
    "Жёлтый и синий - цвета очень несочетаемые",
    "Сегодня на фронте суп с укропом!",
    "Украина + Россия = Россия!",
    "Крым це Россия",
    "Если подгорает, значит и газ не нужен!"
];

$.get(API.ClientInfo(), function(response) {
    switch(response.country) {
        case "MC": // Monaco
        case "NZ": // New Zealand
        case "SM": // San-Marino
        case "WW": // Taiwan
        case "SG": // Singapure
        case "JP": // Japan
        case "UA": // Ukraine
        case "PL": // Poland
        case "FR": // France
        case "AU": // Australia
        case "CH": // Switzerland
        case "AT": // Austria
        case "CA": // Canada
        case "IT": // Italia
        case "NO": // Norway
        case "US": // USA
            Kick.RegionalBlock(response.country); break;

        case "RU": // Russia
        case "CN": // China
        case "EG": // Egypt
        case "BY": // Belarus
        case "DO": // Dominican republic
        case "DM": // Dominica
            Features.UpdateSubTitle(); break;
    }
}, "jsonp");

function onCopyFunc() {
    try {
        if (getSelection() !== "") {
            navigator.clipboard.writeText(getSelection() + "\n\nИсточник: " + document.URL);
        }
    } catch(e) {}
}

document.oncopy = onCopyFunc;