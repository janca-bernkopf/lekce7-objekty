// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: "Ford",
    barva: "stříbrná",
    rokVyroby: 2018,
    spz: "JBB 2582"
}


// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = "Jana";
auto.majitel.prijmeni = "Bernkopf";


// Přepiš značku na Škoda
auto["znacka"] = "Škoda Scout"

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
const majitelka = auto.majitel.jmeno + " " + auto.majitel.prijmeni;
const znacka = auto.znacka;
const spz = auto.spz;

document.querySelector("#majitelka").innerHTML = majitelka;
document.querySelector("#znacka").innerHTML = znacka;
document.querySelector("#spz").innerHTML = spz;

console.log(auto)
