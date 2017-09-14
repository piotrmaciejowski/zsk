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
