/*var text = 'Zespół Szkół Komunikacji';
var regex = /Szkół/;
var sprawdz = regex.test(text);
console.log(sprawdz);*/

//var text1 = 'Technik informatyk';
/*var regex1 = /informatyk/;
var regex1 = /^informatyk/;
var regex1 = /informatyk$/;
var regex1 = /Tech[a-z]/;
*/

var regex = /[0-9]{2}-[0-9]{3}/;
var elBtn = document.getElementById('btn');
var elKod = document.getElementById('kod');
var elBlok = document.getElementById('blok');

elBtn.onclick = function() {
	if (regex.test(elKod.value) == true) {
		elBlok.innerHTML = '<br>nice!';
	}
	else {
		elBlok.innerHTML = '<br>ehh...';
	}
}