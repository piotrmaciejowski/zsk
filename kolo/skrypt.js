function oblicz(r, h){

    //Definicja zmiennych z formularza
	var r = document.getElementById('promien').value;
    var h = document.getElementById('wysokosc').value;

    var elObwod = document.getElementById('obwod');
    var elPole = document.getElementById('pole');
    var elObjetosc = document.getElementById('objetosc');

    //Działania
    var Obw = 2 * Math.PI * r;
    var Pol = Math.PI * Math.pow(r, 2);
    var Obj = Pol * h / 3;

    //Wynik
    var wynik = [Obw, Pol, Obj];

    //Wyświetlanie obliczeń
    if (elObwod.checked == true) {
        document.getElementById('wyniki').innerHTML = Obw.toFixed(4) + ' cm' + '2'.sup();
        document.getElementById('naglowek').innerHTML = 'Obwód:';
    } else if (elPole.checked == true) {
            document.getElementById('wyniki').innerHTML = Pol.toFixed(4) + ' cm' + '2'.sup();
            document.getElementById('naglowek').innerHTML = 'Pole:';
    } else if (elObjetosc.checked == true) {
            document.getElementById('wyniki').innerHTML = (Obj * 0.001).toFixed(4) + ' dm' + '3'.sup();
            document.getElementById('naglowek').innerHTML = 'Objętość:';
    } else {
            document.getElementById('wyniki').innerHTML = 'Wybierz obliczenie i wprowadź dane!';
            document.getElementById('naglowek').innerHTML = '';
    };

    return wynik;
}
