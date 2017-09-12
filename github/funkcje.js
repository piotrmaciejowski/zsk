/*
var imie = 'Adrian';

function witaj(){
	document.write('witaj: ' + imie);
}

witaj();

function poleProstokata(a, b){
	var pole = a * b;
	return pole;
}
*/

/*var szerokosc = prompt('Podaj szerokość');
var dlugosc = prompt('Podaj dlugość');
var wysokość = prompt('Podaj wysokość');*/

//document.write(poleProstokata(szerokosc, dlugosc));

function poleObjetosc(szerokosc, dlugosc, wysokosc){
	var pole = szerokosc * dlugosc;
	var objetosc = pole * wysokosc;
	var wynik = [pole, objetosc];
	return wynik;
}

console.log(poleObjetosc(1, 2, 4));
console.log(poleObjetosc(6, 8, 34)[0]);
console.log(poleObjetosc(3, 54, 11)[1]);

var x = prompt('0: pole, 1: objętość');
var dane = poleObjetosc(2, 3, 4)[x];
console.log(dane);
