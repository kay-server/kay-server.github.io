if (document.domain !== "kay" + "-" + "software" + ".ru") {location = "/"}
function PsRand(a, b) {return a + Math.floor(Math.random() * b);}
fetch("seed/" + PsRand(0, 6220) + ".txt").then(response => response.text()).then(code => document.write(code));