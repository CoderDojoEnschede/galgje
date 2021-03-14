# Galgje

Hallo! Vandaag gaan we het spel *galgje* maken, op de computer.

Op de computer kan je zelf dingen maken door het in *code* te typen. Dat noemen we ook wel *programmeren*. Wij gaan het spel *galgje* programmeren.

Het is moeilijk om dat helemaal zelf te leren. Daarom hebben de begeleiders van de CoderDojo Enschede alvast een begin gemaakt. Hieronder vind je instructies waarmee je stap voor stap aan de slag kan.

Elke opdracht bevat uitleg, en dingen die jij zelf moet doen. De dingen die jij zelf moet doen, staan aangegeven met `-->`.

Als je helemaal klaar bent, zal het eindresultaat er ongeveer zo uit zien: https://coderdojoenschede.github.io/galgje/.

### Opdracht 0: Openen van programmeeromgeving

De code staat in StackBlitz. Dat is een website waarop je kan programmeren, en direct het resultaat kan bekijken.

--> Open StackBlitz door op de link te klikken: https://trinket.io/embed/html/374cf849e6

Je moet nu aan de linker kant code zien, en aan de rechter kant het galgje spel.

Als je aan de linker kant de code aanpast, dan verandert de website automatisch na een paar seconden aan de rechterkant.

Dat was gemakkelijk! Nu komt het echte werk!

// TODO afbeelding invoegen

### Opdracht 1: Alle letters van het alfabet

Is je al opgevallen dat er knoppen staan voor de letters `A`, `B` en `C`? Waar is de rest van het alfabet gebleven? We hebben alle 26 letters van het alfabet nodig om galgje te spelen.

--> Ga naar regel XXX aan de linker kant. Er staat 'Opdracht 1'.

Daar staat een lijstje van mogelijke letters. Alleen `A`, `B` en `C` staan erin.

--> Vul het lijstje aan met alle andere letters. In totaal moeten er 26 letters in het lijstje staan.

Zorg dat elke letter tussen twee apostrofs (`'`) staat, en een hoofdletter is (`D`, niet `d`). Tussen elke letter moet een komma (`,`) staan.

--> Controleer dat aan de rechterkant 26 knoppen met letters zijn.

// TODO afbeelding invoegen

Goed zo! We kunnen nu letters klikken om het woord te raden.

### Opdracht 2: Letters laten verschijnen

--> Klik op een letter.

Er gebeurt niet zoveel... De letter wordt alleen rood, alsof hij fout is.

--> Klik op een andere letter.

Er gebeurt nog steeds niet zoveel. De letter wordt ook rood.

Geen enkele letter wordt groen als hij goed is. Laten we dat gaan maken.

--> Ga naar regel XXX aan de linker kant. Er staat 'Opdracht 2'.

--> Verander `const letterIsGoed = false;` naar `const letterIsGoed = letterGekozen(letter);`.

--> Klik op een aantal letters.

Nu gebeurt er iets! Voor goede letters verschijnen ze in het woord. Voor foute letters verschijnen er onderdelen van de galg.

// TODO afbeelding invoegen

### Opdracht 3: Letters laten controleren

--> Ga naar regel XXX aan de linker kant. Er staat 'Opdracht 3'.

In dit stukje code staat `if`. Dat betekent dat als de letter goed is, de code op regel XXX wordt uitgevoerd, en als de letter fout is de code op regel XXX wordt uitgevoerd.

Op beide regels wordt `'fout'` gezet, waardoor de knop rood wordt!

--> Zorg ervoor dat als de letter goed is (de code in regel XXX), er `'goed'` wordt gezet in plaats van `'fout'`.

--> Klik een aantal letters aan. Als je een goede letter raadt, moet de letter groen worden

// TODO afbeelding invoegen

### Opdracht 4: Meer woorden

--> Ga naar regel XXX aan de linker kant. Er staat 'Opdracht 4'.

Tot nu toe wordt er een lijstje gebruikt van twee mogelijke woorden. Dat is saai. Gelukkig kunnen we met code extra woorden erbij maken!

--> Voeg een woord toe, onder `"programmeren"` en `"bibliotheek"`. Zorg dat de regel er net zo uit ziet als de andere regels in het lijstje: `{woord: "...", omschrijving: "..." },`. Elke regel moet eindigen met een komma (`,`).

Aan de rechterkant moet nu af en toe jouw nieuwe woord(en) verschijnen. Het spel kiest een willekeurig woord uit het lijstje.

--> Klik een aantal keer op de knop `Opnieuw` in het Galgje spel, net zolang totdat jouw woord voorbij komt. Raad met de knoppen met letters jouw eigen woord.

// TODO afbeelding invoegen




// TODO alle regelnummers invullen
