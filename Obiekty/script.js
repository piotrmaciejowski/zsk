/*//tworzenie obiektu za pomocą literału

var janusz = {
	wzrost: 180,
	waga: 80,
	miejsceUrodzenia: 'Poznań',
	plec: 'M'
};

//console.log(janusz.wzrost);

var auto = {
	marka: 'opel',
	model: 'zafira',
	predkosc: 180,
	wyswietl() {
		document.write('Marka: ' + this.marka);
	}
}

//auto.wyswietl()

var ksiazka = {
	tytul: 'Pan Tadeusz',
	wydana: 1834,
	gatunek: 'Poemat liter',
	autor: {
		imie: 'Adam',
		nazwisko: 'Mickiewicz',
		wyswietlDane() {
			return 'Imię:' + this.imie + ' Nazwisko:' + this.nazwisko;
		}
	}
};

/*console.log(ksiazka.autor.imie);
console.log(ksiazka.autor['nazwisko']);
console.log(ksiazka.autor.wyswietlDane());*/

//************************************************************************************************
//tworzenie pustego obiektu

/*var produkt = {};

console.log(typeof(produkt.nazwa));

produkt.nazwa = 'Pralka';
produkt.firma = 'Bosch';
produkt.model = 'A1-0234-ABC';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function() {
	return 'Nazwa:' + this.nazwa + '<br>Firma:' + this.firma + '<br>Model:' + this.model
	+ '<br>Waga:' + this.waga + '<br>Cena:' + this.cena + '<br><br>';
};

document.write(produkt.wyswietl())

//usuwanie wlasciwosci

delete(produkt.waga);
document.write(produkt.wyswietl())

var hotel = {
	nazwa: 'Hotel u Henia',
	pokoje: 50,
	zarazerwowane: 20,
	rodzajPokoju: ['Pojedynczy', 'Podwójny', 'Apartament'],
	wolnePokoje() {
		return this.pokoje - this.zarazerwowane;
	}
}

console.log(hotel.wolnePokoje())*/

//************************************************************************************************

function Hotel(nazwa, pokoje, pokojezarezerwowane){
	this.nazwa = nazwa;
	this.pokoje = pokoje;
	this.pokojezarazerwowane = pokojezarezerwowane;
	this.wolnePokoje = function() {
		return this.pokoje - this.pokojezarazerwowane;
	}
};

var hotelLech = new Hotel('Lech', 40, 15);
var hotelMerkury = new Hotel('Merkury', 150, 70);

<<<<<<< HEAD
document.write('Wolne pokoje w hotelu Lech: ' + hotelLech.wolnePokoje());

//********************** Tablice w obiekcie
var suma = 0;
var gowno = 0;


var platnosci = {
    pokoje: [
    [50,100],           //pokoj1
    [150,100],          //pokoj2
    [50],               //pokoj3
    [50,100,250]        //pokoj4
    ],
    calkowitePlatnosci() {
        console.log(this.pokoje.length);
        console.log(this.pokoje[1].length);
        for (var i = 0; i <= this.pokoje.length; i++){
            console.log(this.pokoje[1].length);
            console.log(i);
            console.log(this.pokoje[i].length);
/*            for (var j = 0; j < gowno; j++){
                suma += this.pokoje[i][j];
            }*/
        }
    }
};

/*console.log(platnosci.pokoj1[1]);
console.log(platnosci.pokoj1.length);*/
platnosci.calkowitePlatnosci();
console.log(suma);

// Zad dom obliczyć całkowitą wartość płatności wszystkich pokoi. Stwórz metodę o nazwie calkowitePlatnosci
=======
//document.write('Wolne pokoje w hotelu Lech: ' + hotelLech.wolnePokoje());

//Pieski

function Pies(imie, rasa, waga, ulubioneZajecia){
	this.imie = imie;
	this.rasa = rasa;
	this.waga = waga;
	this.ulubioneZajecia = ulubioneZajecia;
}

var azor = new Pies('Azor', 'bokser', 30, ['spacery', 'szczekanie']);
var edi = new Pies('Edi', 'bokser', 8, ['bieganie', 'szczekanie']);
var saba = new Pies('Saba', 'jamnik', 20, ['spacery']);
var psy = [azor, edi, saba];

/*edi.ulubioneZajecia.push('spanie');
console.log(edi);
document.write(edi.ulubioneZajecia);*/

var rozmiar = 'mały pies';

for (var i = 0; i < psy.length; i++){
	if (psy[i].waga > 10){
		rozmiar = 'duży pies';
	}
	else {
		rozmiar = 'mały pies';
	}
	document.write('Pies: <span style="color:blue;">' + psy[i].imie + '</span> - ' + rozmiar + '<br>');
}

/*var tab = ['Jan', 'Nowak', 'Poznań'];
var i;
for (i in tab){
	document.write(i + ' - ' + tab[i] + '<br>');
};*/

/*var i;
for (i in edi){
	document.write(i + ' - ' + edi[i] + '<br>');
};*/
/*
var i;
for (i in edi){
	if (i == 'imie' || i == 'rasa'){
		document.write(i + ' - ' + edi[i] + '<br>');
	}
};*/

function uczen(imie, nazwisko){
	this.imie = imie;
	this.nazwisko = nazwisko;
};

var robert = new uczen('Robert', 'Lewandowski');
uczen.prototype.narodowosc = 'Polska';
uczen.prototype.wyswietlUcznia = function(){
	return 'Imię: ' + this.imie + '<br>' + 'Nazwisko: ' + this.nazwisko + '<br>' + 'Narodowość: ' + this.narodowosc;
};
/*
document.write(robert.wyswietlUcznia());
document.write(robert.constructor);
document.write(robert.constructor.prototype.narodowosc);*/
>>>>>>> origin/master
