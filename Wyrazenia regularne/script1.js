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
var elCheckbox = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elBox = document.getElementById('box');

var regImie = /^[a-ząśćźżółęń]{2,20}$/i;
var regNazwisko = /^[a-ząśćźżółęń]{2,20}(\-[a-ząśćźżółęń]{2,10})?$/i;
var regNazwiskoMyslnik = /[-]/;
var regLogin = /^[a-z0-9]{1}[\w\.\-]{1,20}[a-z0-9]{1}$/i;
var regMail = /^[a-z][\w\.\-\_]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/;
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/

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

function sprawdzImie() {
	var imieSpr = regImie.test(elImie.value);
	if (imieSpr == true) {
		elBlok.innerHTML = '';
	}
	else {
		elBlok.innerHTML = 'Błąd w imieniu!';
		this.focus();
	}
}

function sprawdzNazwisko() {
	var nazwiskoSpr = regNazwisko.test(elNazwisko.value);
	if (nazwiskoSpr == true) {
		elBlok.innerHTML = '';
	}
	else {
		elBlok.innerHTML = 'Błęd w nazwisku!';
		this.focus();
	}
}

function sprawdzLogin() {
	var loginSpr = regLogin.test(elLogin.value);
	if (loginSpr == true) {
		elBlok.innerHTML = '';
	}
	else {
		elBlok.innerHTML = 'Błędny login!';
		this.focus();
	}
}

function sprawdzMail() {
	var mailSpr = regMail.test(elMail1.value);
	if (mailSpr == true) {
		elBlok.innerHTML = '';
	}
	else {
		elBlok.innerHTML = 'Błędny mail!';
		this.focus();
	}
}

function mail() {
	if (elMail1.value != elMail2.value) {
		elBlok.innerHTML = 'Adresy poczty są różne!';
		elMail1.value = '';
		elMail2.value = '';
		elMail1.disabled = false;
		elMail1.focus();
	}
	else {
		elMail1.disabled = true;
		elMail2.disabled = true;
		elBlok.innerHTML = '';
	}
}

function blokujMail() {
	if(regMail.test(elMail1.value) == true) {
		elMail1.disabled = true;
		elMail2.disabled = false;
		elMail2.focus;}
	else {
		elMail1.focus;
	}
}

function haslo() {
	if (elPass1.value != elPass2.value) {
		elBlok.innerHTML = 'Hasła są różne!';
		elPass1.value = '';
		elPass2.value = '';
		elPass1.disabled = false;
		elPass1.focus();
	}
	else {
		elPass1.disabled = true;
		elPass2.disabled = true;
		elBlok.innerHTML = '';
	}
}

function blokujHaslo() {
	if (regPass.test(elPass1.value) == true) {
		elPass1.disabled = true;
		elPass2.disabled = false;
		elPass2.focus;
	}
	else {
		elPass1.focus();
		elPass1.value = '';
		elBlok.innerHTML = 'Hasło musi być silniejsze!';
	}
}

elImie.addEventListener('blur', sprawdzImie);
elNazwisko.addEventListener('blur', sprawdzNazwisko);
elLogin.addEventListener('blur', sprawdzLogin);
elMail1.addEventListener('blur', sprawdzMail);
elMail1.addEventListener('blur', blokujMail);
elMail2.addEventListener('blur', mail);
elPass1.addEventListener('blur', blokujHaslo);
elPass2.addEventListener('blur', haslo);

elCheckbox.onclick = function() {
	if (elCheckbox.checked == true) {
		elPrzycisk.disabled = false;
	}
	else {
		elPrzycisk.disabled = true;
	}
}

elPopraw.onclick = function() {
	var T = document.getElementsByTagName('input');
	for (var i = 0; i < T.length; i++) {
		if (T[i].disabled == true && T[i].id != 'mail2' && T[i].id != 'pass2') {
			T[i].disabled = false;
			console.log(T[i]);
		}
		else {
			T[i].value = '';
		}
	}
}

elPrzycisk.onclick = function() {
	var imie = elImie.value;
	imie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
	
	var nazwisko = elNazwisko.value;
	nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();
	if (regNazwiskoMyslnik.test(nazwisko)) {
		var myslnik = nazwisko.indexOf('-') + 1;
		var nazwisko1 = nazwisko.slice(0, myslnik);
		var nazwisko2 = nazwisko.slice(myslnik, nazwisko.length);
		nazwisko2 = nazwisko2.charAt(0).toUpperCase() + nazwisko2.slice(1).toLowerCase();
		nazwisko = nazwisko1 + nazwisko2;
	};
	

	
	document.write(imie + '<br>' + nazwisko  + '<br>' + elMail1.value + '<br>' + elDataur.value);
}

