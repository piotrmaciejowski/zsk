elBlok = document.getElementById('blok');
elBlok.style.width = '200px';
elBlok.style.height = '200px';

var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

elBlok.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';