function oblicz(promien, wysokosc){

	var r = document.getElementById('promien').value;
    var h = document.getElementById('wysokosc').value;

    var Obw = 2 * Math.PI * r;
    var Pol = Math.PI * Math.pow(r, 2);
    var Obj = Pol * h / 3;

    var wynik = [Obw, Pol, Obj];

    var elObwod = document.getElementById('obwod');
    var elPole = document.getElementById('pole');
    var elObjetosc = document.getElementById('objetosc');

    if (elObwod.checked == true) {
        document.getElementById('wyniki').innerHTML = Obw.toFixed(4) + ' cm2';
        document.getElementById('naglowek').innerHTML = 'Obwód:'
    } else if (elPole.checked == true) {
            document.getElementById('wyniki').innerHTML = Pol.toFixed(4) + ' cm2';
            document.getElementById('naglowek').innerHTML = 'Pole:'
    } else if (elObjetosc.checked == true) {
                document.getElementById('wyniki').innerHTML = (Obj * 0.001).toFixed(4) + ' dm3';
                document.getElementById('naglowek').innerHTML = 'Objętość:'
            };

    return wynik;
}
