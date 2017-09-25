//napisz orogram, który wyświetla liczby od 1 do 100. Dla liczb podzielnych przez 3 niech program wyświetli Fizz. Dla liczb podzielnych przez 5 program wyświetli Buzz. Dla liczb podzielnych przez 15 Fizz-Buzz

var elBlok = document.getElementById('blok');
var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elDataur = document.getElementById('dataur');
var elCheckbox = document.getElementById('checkbox');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');

elBlok.style.color = 'red';

//onload

/*onload = function() {
	alert('pupa');
}*/

//onblur

/*
elImie.onblur = function() {
	if (elImie.value.length > 2 && elImie.value.length < 10)
		{
		elBlok.innerHTML = '';
		}
	else {
		elBlok.innerHTML = 'Błędne dane!';
	}
};
*/

//event listener

/*function sprawdz() {
	if (elImie.value.length > 2 && elImie.value.length < 10)
		{
		elBlok.innerHTML = '';
		}
	else {
		elBlok.innerHTML = 'Błędne dane!';
	}
};

elImie.addEventListener('blur', sprawdz)*/

function sprawdz() {
	var element = document.getElementById(this.id);
	if (element.value.length > 2 && element.value.length < 10) {
		elBlok.innerHTML = '';
	}
	else {
		elBlok.innerHTML = 'Błędne dane!';
		element.focus();
	}
}

function mail() {
	if (elMail1.value != elMail2.value) {
		elBlok.innerHTML = 'Adresy poczty są różne!';
		elMail2.value = '';
		elMail1.focus();
	}
	else {

	}
}

elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elMail2.addEventListener('blur', mail);
