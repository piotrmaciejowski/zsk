var elBlok = document.getElementById('blok');

elBlok.style.width = '200px';
elBlok.style.height = '200px';
elBlok.style.backgroundColor = '#b0b0ff';

elBlok.onmouseover = function() {
    
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    elBlok.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

}

var elHaslo = document.getElementById('haslo');
var elPrzycisk = document.getElementById('przycisk');
var i = 0;

elPrzycisk.onclick = function() {
    if (elHaslo.value == 'Wojtek123') {
        document.write('naisu');
    }
}