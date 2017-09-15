//Math.PI

function pi(){
	var elNic = document.getElementById('wyborNic');
	var elPi = document.getElementById('wyborPi');
	var elBlok = document.getElementById('blok');

	if (elPi.checked == true) {
		elBlok.innerHTML = Math.PI;
	}
	else if (elNic.checked == true){
		elBlok.innerHTML = 'Wybrałeś radio nic';
	}
	else {
		elBlok.innerHTML = 'Nic nie wybrałeś';
	};
};

//Math.sqrt

var pierwiastek = Math.sqrt(25);

console.log(pierwiastek);

var a = 13.2;
var b = 28.5;

var minimalna = Math.min(a, b);
var maksymalna = Math.max(a, b);

console.log(minimalna + ': minimalna');
console.log(maksymalna + ': maksymalna');

var zaokraglenieA = Math.round(a);
var zaokraglenieB = Math.round(b);

console.log(zaokraglenieA);
console.log(zaokraglenieB);

var zaokragleniemin = Math.round(minimalna);
console.log(zaokragleniemin);

//abs - wartość bezwzględna, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x)); //56
document.write('<br>' + Math.abs(y)); //13.1
document.write('<br>' + Math.abs(z)); //14.9
document.write('<br>');
document.write('<br>' + Math.round(x)); //-56
document.write('<br>' + Math.round(y)); //-13
document.write('<br>' + Math.round(z)); //15
document.write('<br>');
document.write('<br>' + Math.floor(x)); //-56
document.write('<br>' + Math.floor(y)); //-13
document.write('<br>' + Math.floor(z)); //15

//potęgowanie

var p = Math.pow(2,10);
console.log(p); //1024

//random

for (var i = 0; i < 2; i ++){
	var losuj = Math.random();
	console.log(losuj);
}

//losuj z przedziału (0,10>

var los = Math.floor(Math.random() * 11);
console.log(los);

