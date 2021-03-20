import {maakBinnenEnGeefTerug, maakLeeg, pak, veranderText} from "./bibiliotheek.js";

let resultaat = pak('resultaat');

/// --- Opdracht 4 --- ///

const alleWoorden = [
    {woord: "programmeren", omschrijving: "Wat doen we bij de Coderdojo?"},
    {woord: "bibliotheek", omschrijving: "Waar houden we de Coderdojo?"},
];

/// --- Opdracht 4 --- ///

const huidigWoord = alleWoorden[Math.round(Math.random() * (alleWoorden.length - 1))];

veranderText('omschrijving', huidigWoord.omschrijving);
maakLeeg('woord');
for (let i = 0; i < huidigWoord.woord.length; i++) {
    const letter = maakBinnenEnGeefTerug('woord', 'div', 'letter');
    letter.setAttribute('data-letter', huidigWoord.woord.charAt(i));
}

const invoerLetterEventSoorten = ['click', 'touchstart'];

/// --- Opdracht 1 --- ///

const mogelijkeLetters = ['A', 'B', 'C', ];

/// --- Opdracht 1 --- ///

for (let i = 0; i < mogelijkeLetters.length; i++) {
    let invoerLetter = maakBinnenEnGeefTerug('invoer-letters', 'button', 'invoer-letter');
    const mogelijkeLetter = mogelijkeLetters[i];
    invoerLetter.setAttribute('data-letter', mogelijkeLetter);
    invoerLetter.setAttribute('draggable', false);
    veranderText(invoerLetter, mogelijkeLetter);
    luisterNaarInvoer(invoerLetter);
}

function luisterNaarInvoer(element) {
    invoerLetterEventSoorten.forEach(invoerLetterEventSoort => element.addEventListener(invoerLetterEventSoort, verwerkInvoerClick));
}

function stopMetLuisterenNaarInvoer(element) {
    invoerLetterEventSoorten.forEach(invoerLetterEventSoort => element.removeEventListener(invoerLetterEventSoort, verwerkInvoerClick));
}

function verwerkInvoerClick(ev) {
    ev.preventDefault();
    this.setAttribute('disabled', 'disabled');
    stopMetLuisterenNaarInvoer(this);
    const letter = this.getAttribute('data-letter');
    let letterType = '';

    /// --- Opdracht 2 --- ///

    const letterIsGoed = false;

    /// --- Opdracht 2 --- ///


    /// --- Opdracht 3 --- ///

    if (letterIsGoed) {
        letterType = 'fout';
    } else {
        letterType = 'fout';
    }

    /// --- Opdracht 3 --- ///

    this.classList.add(letterType);

    /// --- Opdracht 5 --- ///

    /// --- Opdracht 5 --- ///
}


/// --- Opdracht 6 --- ///

let figuurOnderdelen = [
  'g-onderste-lijn',
  'g-paal',
  'g-balk',
  'g-touw',
  'g-hoofd',
  'g-buik',
  'g-linker-arm',
  'g-rechter-arm',
  'g-linker-been',
  'g-rechter-been',
];

/// --- Opdracht 6 --- ///

let aantalFout = 0;

function letterGekozen(gekozenLetter) {
    let woordElement = pak('woord');
    let aantalGevonden = 0;
    let aantalGoed = 0;
    for (let i = 0; i < woordElement.children.length; i++) {
        const letterElementInWoord = woordElement.children.item(i);
        let letterInWoord = letterElementInWoord.getAttribute('data-letter').toLowerCase();
        if (letterInWoord === gekozenLetter.toLowerCase()) {
            veranderText(letterElementInWoord, gekozenLetter);
            aantalGevonden++;
        }
        if (letterInWoord === letterElementInWoord.innerText.toLowerCase()) {
            aantalGoed++;
        }
    }
    if (aantalGevonden === 0) {
        if (aantalFout < figuurOnderdelen.length) {
            pak(figuurOnderdelen[aantalFout]).style.display = 'block';
            aantalFout++;
        }
        if (aantalFout >= figuurOnderdelen.length) {
            verloren();
        }
    } else if (aantalGoed === woordElement.children.length) {
        gewonnen();
    }
    return aantalGevonden > 0;
}

function verloren() {
    einde('Helaas, verloren!', '#ffaa33');
}

function gewonnen() {
    einde('Jaaa, gewonnen!!!', '#55cc33');
}

function einde(tekst, kleur) {
    const alleInvoerLetters = pak('invoer-letters');
    for (let i = 0; i < alleInvoerLetters.children.length; i++) {
        let invoerLetter = alleInvoerLetters.children.item(i);
        invoerLetter.setAttribute('disabled', 'disabled');
        stopMetLuisterenNaarInvoer(invoerLetter);
    }
    pak('omschrijving').classList.add('einde');
    pak('speelveld').classList.add('einde');
    veranderText('resultaat', tekst);
    window.setTimeout(() => {
        pak('speelveld').style.display = 'none';
        pak('omschrijving').style.display = 'none';
        let resultaat = pak('resultaat');
        resultaat.classList.add('einde');
        resultaat.style.color = kleur;
    }, 2000);
}
