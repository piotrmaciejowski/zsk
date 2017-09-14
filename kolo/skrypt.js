function oblicz(r, h){

    //Definicja zmiennych z formularza
	var r = document.getElementById('promien').value;
    var h = document.getElementById('wysokosc').value;

    var elObwodRadio = document.getElementById('obwod');
    var elPoleRadio = document.getElementById('pole');
    var elObjetoscRadio = document.getElementById('objetosc');

    //Działania
    var Obw = 2 * Math.PI * r;
    var Pol = Math.PI * Math.pow(r, 2);
    var Obj = Pol * h / 3;

    //Tablica wyników
    var wynik = [Obw, Pol, Obj];

	//Zmienne do wyświetlania wyników
	var elWyniki = document.getElementById('wyniki');
	var elNaglowek = document.getElementById('naglowek');

    //Wyświetlanie obliczeń
    if (elObwodRadio.checked == true) {
        elWyniki.innerHTML = Obw.toFixed(4) + ' cm' + '2'.sup();
        elNaglowek.innerHTML = 'Obwód:';
    } else if (elPoleRadio.checked == true) {
            elWyniki.innerHTML = Pol.toFixed(4) + ' cm' + '2'.sup();
            elNaglowek.innerHTML = 'Pole:';
    } else if (elObjetoscRadio.checked == true) {
                elWyniki.innerHTML = (Obj * 0.001).toFixed(4) + ' dm' + '3'.sup();
                elNaglowek.innerHTML = 'Objętość:';
            } else {
                elWyniki.innerHTML = 'Wybierz obliczenie i wprowadź dane!';
                elNaglowek.innerHTML = '';
            };

    return wynik;
}
