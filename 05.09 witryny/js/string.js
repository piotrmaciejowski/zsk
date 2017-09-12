var text = 'ZSK - Zespół Szkół Komunikacji';

console.log(text.length); //30

var pierwszy = text.charAt(0);
console.log(pierwszy); //Z

var ostatni = text.charAt(text.length - 1);
console.log(ostatni); //i

var kod = text.charCodeAt(0);
console.log(kod);

//zamiana na dużę litery

var duza = text.toUpperCase();
console.log(duza);

var male = text.toLowerCase();
console.log(male);              

var poprawnyTekst = prompt('Podaj imię:', 'Janusz');

//walidacja znaków
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase() + poprawnyTekst.slice(1).toLowerCase();
console.log(poprawnyTekst);


//pierwszy i ostatni
poprawnyTekst = poprawnyTekst.substr(0, 1) + poprawnyTekst.substr(poprawnyTekst.length - 1, 1);
console.log(poprawnyTekst);


//bez pierwszego i ostatniego
poprawnyTekst = poprawnyTekst.substr(1, poprawnyTekst.length - 2);
console.log(poprawnyTekst);

