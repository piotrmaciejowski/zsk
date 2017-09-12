var elLogin = document.getElementById('login');
var elPass = document.getElementById('password');
var elHex = document.getElementById('hex');
var elAplha = document.getElementById('alpha');
var elNaglowek = document.getElementById('naglowek');
var elBox = document.getElementById('box');
var Tab = [];

function zmien() {
    var kolor = '#' + elHex.value; 
    var sub1 = elHex.value.substring(0, 3);
    var sub2 = elHex.value.substring(3, 6);
	
    elNaglowek.style.color = kolor;
    elBox.style.opacity = elAplha.value / 100;
    elBox.style.backgroundColor = '#' + sub2 + sub1;
    
    Tab[0] = elLogin.value;
    Tab[1] = ' ' + elPass.value;
    
	elNaglowek.innerHTML = Tab;
	
    console.log(kolor);
    console.log(elBox.style.opacity);
    console.log(Tab);
};
