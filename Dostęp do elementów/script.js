/*
//getElementById

var elPierwszy = document.getElementById('pierwszy');

elPierwszy.className = 'zielony';

//getElementsByTagName

var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length > 0) {
	console.log(elNaglowek);
	console.log(elNaglowek.length);
	elNaglowek[0].className = 'czerwony';
};

//getElementsByClassNameName

var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0) {
	console.log(elCzerwony);
};

var ostatni = elCzerwony[elCzerwony.length - 1];
ostatni.className = 'zielony';

*/

/*
var elBtn = document.getElementById('zmien');
var elLista = document.getElementsByName('grey');

console.log(elLista);	

elBtn.onclick = function() {
	for (var i = 0; i < elLista.length; i++	) {
		elLista[i].className = 'zielony';
	}
};

elBtn.onclick = function() {
	
	var elZespoly = document.getElementsByName('zespoly');
	
	function zmiana(element, index) {
	elZespoly[index].className = 'zielony';
	}
	
	elZespoly.forEach(zmiana);
};
*/

/*var poczatekEl = document.getElementById('zes3');
var poprzedniEl = poczatekEl.previousElementSibling;
var nastepnyEl = poczatekEl.nextElementSibling;

poczatekEl.className = 'zielony';
poprzedniEl.className = 'zielony';
nastepnyEl.className = 'zielony';*/

//first, last child

var lech = document.getElementById('zes1')
var lista = document.getElementsByTagName('ul')[2];
console.log(lista);

var pierwszy = lista.firstElementChild;

pierwszy.setAttribute('class', 'zielony');

var ostatni = lista.lastElementChild;

ostatni.setAttribute('class', 'zielony');

//************************************************************************************************

var text = document.getElementsByTagName('input')[0];

text.value = 'Wyślij';
text.setAttribute('type', 'button');

var link = document.getElementsByTagName('a')[0];
link.setAttribute('href', 'http://www.zsk.poznan.pl/');