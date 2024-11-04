const schere = document.getElementById('userSchereBox');
const stein = document.getElementById('userSteinBox');
const papier = document.getElementById('userPapierBox');

schere.addEventListener("click", function() {
    schere.classList.add('active');
    stein.classList.remove('active');
    papier.classList.remove('active')
});

stein.addEventListener("click", function(){
    schere.classList.remove('active');
    stein.classList.add('active');
    papier.classList.remove('active')
});

papier.addEventListener("click", function(){
    schere.classList.remove('active');
    stein.classList.remove('active');
    papier.classList.add('active')
});

function startGame() {
    const schere = document.getElementById('userSchereBox');
    const stein = document.getElementById('userSteinBox');
    const papier = document.getElementById('userPapierBox');
    const comSch = document.getElementById('comSchere');
    const comSte = document.getElementById('comStein');
    const comPap = document.getElementById('comPapier');
    const ergebnis = document.getElementById('Ergebnis');

    function spielerAuswahl(selection) {
        const comSelection = ['comSch', 'comSte', 'comPap'];
        const comChoice = comSelection[Math.floor(Math.random() * comSelection.length)];

        if (selection === comChoice) {
            ergebnis.innerHTML = 'Verloren!';
        } else if ((selection === 'comSch' && comChoice === 'comPap') ||
                   (selection === 'comSte' && comChoice === 'comSch') ||
                   (selection === 'comPap' && comChoice === 'comSte')) {
            ergebnis.innerHTML = 'Unentschieden!';
        } else {
            ergebnis.innerHTML = 'Gewonnen!';
        }

        // Hintergrundfarbe des Computers entsprechend der Auswahl ändern
        if (comChoice === 'comPap') {
            comSch.style.backgroundColor = 'black';
            comSte.style.backgroundColor = '';
            comPap.style.backgroundColor = '';
        } else if (comChoice === 'comSch') {
            comSch.style.backgroundColor = '';
            comSte.style.backgroundColor = 'black';
            comPap.style.backgroundColor = '';
        } else if (comChoice === 'comSte') {
            comSch.style.backgroundColor = '';
            comSte.style.backgroundColor = '';
            comPap.style.backgroundColor = 'black';
        }
    };

    schere.addEventListener("click", function() {
        spielerAuswahl('comSch');
    });

    stein.addEventListener("click", function() {
        spielerAuswahl('comSte');
    });

    papier.addEventListener("click", function(){
        spielerAuswahl('comPap');
    });}

startGame();