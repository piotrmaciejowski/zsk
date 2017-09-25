var elZespol = document.getElementById('zespol');
var elCheck = document.getElementById('check');
var elWynik = document.getElementById('wynik');
var tabZespoly = [];
var i = 0;
var j = 0;

elWynik.style.color = '#ef0000';

elCheck.onclick = function() {
    tabZespoly[i] = elZespol.value;
    if (tabZespoly[i] == 'AC/DC' || tabZespoly[i] == 'Metallica') {
        j++;
    };
    i++;
    console.log(tabZespoly);
    console.log(tabZespoly.length);

    if (i == 3 && j < 2) {
        elWynik.innerHTML = '<br>Nie słuchasz tego co ja';
    }
    else if (j == 2) {
        window.open('https://www.metallica.com/', '',);
        window.open('http://www.acdc.com/', '',);
    };
}
