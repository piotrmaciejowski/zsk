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

var elBtn = document.getElementById('zmien');
var elLista = document.getElementsByName('grey');
console.log(elLista);	

elBtn.onclick = function() {
	for (var i = 0; i < elLista.length; i++	) {
		elLista[i].className = 'zielony';
	}
}
