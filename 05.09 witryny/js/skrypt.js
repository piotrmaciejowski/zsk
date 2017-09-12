/*
document.write('skrypt działa poprawnie<br />');
document.write('skrypt działa poprawnie<br />');
document.write('skrypt działa poprawnie<br />');
console.log('tekst');
*/

var imie = 'Ada';
//document.write(imie);
//var - słowo kluczowe
//imie - nazwa zmiennej
//= - operator przypisania
//Ada - wartosc zmiennej
//console.log(imie);
//konkatenacja:
//document.write('Witaj, ' + imie + '!');
//uwaga na stringi!
var suma = 10 + 20 + 30;
var suma1 = 10 + '20' + 30;
//console.log(suma);

//window.alert('...') - domyslnie odwoluje sie do obiektu window
//alert('test');

var a = 9, b = 'Janusz', c = true, d;

var suma = a + b;
var roznica = a - b;
var mnozenie = a * b;
var dzielenie = a / b;
var modulo = a % b;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

var dzialanie = 7 % 2 / 3;
console.log(dzialanie);

var dziesietna = 10;
console.log(dziesietna);
var oktalna = 010;
console.log(oktalna);
var hex = 0x20;
console.log(hex);

console.trace(); //pokazuje scieżke i plik

//camelCase

var duzaLitera;

//var $dolar;
//var _palka;

var zmienna = 2.5;
console.log(zmienna);

var j1 = '1';
console.log(typeof(j1));
j1 = parseInt(j1);
var j2 = '1.5';
j2 = parseFloat(j2);

console.log(typeof(j1));

var wynik2 = j1 + j2;
console.log(wynik2);

var wiek = 'Aga';
wiek = parseInt(wiek);
console.log(wiek); //NaN

var x = 'zsk';

//document.getElementById('naglowek').innerHTML = x;
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = x;
elNaglowek.style.color = 'red';

//var imie = prompt('Podaj imię:');
//console.log(typeof(imie));

var a = prompt('Podaj a:');
var b = prompt('Podaj b:');
a = parseInt(a);
b = parseInt(b);

var pole = a * b;
console.log(pole);

var srednia = (a + b) /2;
console.log(srednia);

var elNaglowek2 = document.getElementById('naglowek2');
elNaglowek2.innerHTML = 'Średni wiek wynosi: ' + srednia;

