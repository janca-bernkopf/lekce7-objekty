let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div elementu s tridou 'zvire'.

    let zvire = document.createElement("div");
    zvire.className = "zvire";

    let ovce = document.createElement("div");
    ovce.className = "zvire";

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.
    
    let fotoZvirete = document.createElement("img");
    fotoZvirete.className = "foto";
    fotoZvirete.src = krava.foto;

    let fotoOvce = document.createElement("img");
    fotoOvce.className = "foto";
    fotoOvce.src = ovecka.foto;
    
    

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    let jmenoZvirete = document.createElement("span");
    jmenoZvirete.className = "jmeno";
    jmenoZvirete.innerHTML = krava.jmeno;

    let jmenoOvce = document.createElement("span");
    jmenoOvce.className = "jmeno";
    jmenoOvce.innerHTML = ovecka.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    ovce.appendChild(fotoOvce);
    ovce.appendChild(jmenoOvce);


// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  let farma = document.querySelector(".farma");
  farma.appendChild(zvire);
  farma.appendChild(ovce);


// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?

let dalsiZvirata = [
    {
        jmeno: "Husička",
     foto: "obrazky/husa.jpg"
    },
    {
        jmeno: "Kočička",
        foto: "obrazky/kocka.jpg"
    },
    {
        jmeno: "Koník",
     foto: "obrazky/kun.jpg"
    },
    {
        jmeno: "Pejsek",
     foto: "obrazky/pes.jpg"
    }
];

dalsiZvirata.forEach(function(elementVPoli) {
    let zvirata =  document.createElement("div");
    zvirata.classList.add("zvire");

    let fotaZvirat = document.createElement("img");
    fotaZvirat.classList.add("foto");
    fotaZvirat.src = elementVPoli.foto;
    fotaZvirat.alt = elementVPoli.jmeno;

    let jmenaZvirat = document.createElement("div");
    jmenaZvirat.classList.add("jmeno")
    jmenaZvirat.textContent = elementVPoli.jmeno;

    zvirata.appendChild(fotaZvirat);
    zvirata.appendChild(jmenaZvirat);

    // proměnná pro farmu je definována výše
    farma.appendChild(zvirata);
})
