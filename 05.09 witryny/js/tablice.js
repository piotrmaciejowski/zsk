//tworzenie tablicy za pomocą literału tablicy

/*var kolory = ['czerwony', 'niebieski', 'zółty'];

var elWynik = document.getElementById('wynik');
elWynik.innerHTML = kolory [0];*/

//tworzenie tablicy za pomocą konstruktora tablic

/*var samochody = new Array('opel', 'ford', 'fiat', 'bmw');

console.log(samochody[samochody.length - 1]);
console.log('Ilość elementów: ' + samochody.length);

var auto = prompt('Podaj auto:');
samochody[0] = auto;

console.log(samochody[0]);*/


/*var szkola = new Array(3);

var imie = prompt('Podaj imię:');
var nazwisko = prompt('Podaj nazwisko:');
var wiek = prompt('Podaj wiek:');

szkola[0] = 'Imię: ' + imie;
szkola[1] = ' Nazwisko: ' + nazwisko;
szkola[2] = ' ' + wiek + ' lat';

console.log(szkola);

var elDane = document.getElementById('dane');
elDane.innerHTML = szkola;*/

//Tablice wielowymiarowe

/*var tab = new Array (
    Array ('Jan', 'Kowalski', 'Poznań'),
    Array ('Wojtek', 'Bambaryła', 'Wrocław'),
    Array ('Marian', 'Nowak', 'Warszawa')
);

console.log(tab);
console.log(tab[1][2]);*/

//Sortowanie

/*
var imiona = ['Paweł', 'Anna', 'Marek', 'Grzegorz', 'Jan', 'Kamil', 'Krzysztof'];
console.log(imiona);

//podstawowe sortowanie
var sort = imiona;
sort.sort();
console.log(sort);

//odwracanie kolejności
var reverse = sort;
sort.reverse();
console.log(reverse);

//usuwanie ostatniego elementu
reverse.pop();
console.log(reverse);

//dodawanie elementu na koniec tablicy
reverse.push('Gerwazy');
console.log(reverse);

//dodawanie elementu na początek tablicy
reverse.unshift("Joanna");
console.log(reverse);

//zwracanie indeksu wartości
console.log(reverse.indexOf('Anna')); //-1 (nie istnieje)
console.log(reverse.indexOf('Gerwazy')); //7 
*/

//Sortowanie liczb

/*
var cyfry = [1, 2, 20, 190, -1, 1000000, 3, -5];
console.log(cyfry); //[1, 2, 20, 190, -1, 1000000, 3, -5]

cyfry.sort();
console.log(cyfry); //[-1, -5, 1, 1000000, 190, 2, 20, 3]

cyfry.sort(function(a, b){
    return (a - b);    
});

console.log(cyfry); //[-5, -1, 1, 2, 3, 20, 190, 1000000]
*/

//obsługa pola input i button'a

var elWynik = document.getElementById('wynik');
var elKolor = document.getElementById('kolor');
var kolor = new Array();

function zapisz(){
    console.log(elKolor.value);
    kolor.push(elKolor.value);
    console.log(kolor);
};

/*utwórz formularz z loginem (text), hasłem (password) i kolorem
hexadecymalnym (text)
Przypisz dane do tablicy jednowymiarowej. WYpisz dane w bloku na stronie w kolorze, jaki podał użytkownik. Pobierz dane z tablicy.*/

