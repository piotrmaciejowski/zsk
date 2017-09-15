//************************************** Pętla for ***********************************************

/*for (var i = 0; i < 10; i ++){
	console.log(i + 1);
	if (i == 6){
		break;
	}
};*/

//Losuj 10 liczb z przedziału od 10 do 100

/*for (var i = 0; i < 10; i ++){
	console.log(Math.floor(Math.random() * 91 + 10)); //!
};*/

/*for (var i = 0; i < 10; i++){
	if (i == 0){
		console.log(i + 1 + ' raz')
	}
	else {
		console.log(i + 1 + ' razy')
	}
};*/

//Użytkownik podaje z klawiatury wartość początkową i końcową pętli. Po każdej liczbie daj przecinek, a po ostatniej daj kropkę. Pierwsza liczba musi być mniejsza od drugiej.

/*var a = prompt('Podaj a');
var b = prompt('Podaj b');

a = parseInt(a);
b = parseInt(b);

if (a > b) {
	alert('Podaj poprawne liczby!');
}
else {
	for ( ; a < b; a++){
		document.write(a + ', ');
	}
	document.write(a + '.');
};*/

//************************************** Pętla while *********************************************

/*var i = 0;

while (i++ < 5){
	console.log(i);
};*/

/*var x = 0, y = 0;

while (x >= y){
	x = Number(prompt('Podaj x'));
	y = Number(prompt('Podaj y'));
};

document.write('Podałeś poprawne wartości: x = ' + x + ' y = ' + y);*/

//************************************** Pętla do while ******************************************

/*
var x = 0;

do {
	x = Number(prompt('Podaj wiek'));
} while (x != 18)

document.write('Masz 18 lat :)');
*/

//wykorzystaj pętle for i do while. Podaj 5 liczb podzielnych przez 2. Zapisz je do tablicy i wyświetl w konsoli

/*var Tab = [];

for (var i = 0; i < 5; i++) {
	x = prompt('Podaj liczbę podzielną przez 2');
	x = parseInt(x);
	if (x % 2 == 0){
		Tab[i] = x;
	} else i--;
};

console.log(Tab);*/
