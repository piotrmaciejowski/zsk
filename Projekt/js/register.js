$(document).ready (function (){

var chkTos = document.getElementById('chk-tos');

var regImie = /^[a-ząśćźżółęń]{2,20}$/i;
var regNazwisko = /^[a-ząśćźżółęń]{2,20}(\-[a-ząśćźżółęń]{2,10})?$/i;
var regNazwiskoMyslnik = /[-]/;
var regLogin = /^[a-z0-9]{1}[\w\.\-]{1,20}[a-z0-9]{1}$/i;
var regMail = /^[a-z][\w\.\-\_]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/;
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/;

var imieReg;
var nazwiskoReg;
var loginReg;
var mailReg;
var passReg;
var passRepeatReg;

//Imię

function imieCheck(){
    var imieValue = document.getElementById('input-imie').value;
    var imieSpr = regImie.test(imieValue);
    if (imieSpr){
        $('#good-imie').css('display', 'inline');
        $('#error-imie').css('display', 'none');
		imieReg = imieSpr;
    }
    else {
        $('#good-imie').css('display', 'none');
        $('#info-imie').css('display', 'none');
        $('#error-imie').css('display', 'inline');
		imieReg = imieSpr;
    }
};

$('#input-imie').focusin(function(){
		$('#info-imie').css('visibility', 'visible');
	});

$('#input-imie').keyup(function(){
    var imieValue = document.getElementById('input-imie').value;
    if(imieValue != ''){
        imieCheck();
    };
});

$('#input-imie').blur(function(){
    imieCheck();
});

$('#input-imie').focusout(function(){
		$('#info-imie').css('visibility', 'hidden');
	});

$('#info-imie').hover(
function(){
    $('#help').css('background-color', '#4d9ffe');
    $('#help h5').text('Imię musi składać się z od 2 do 20 liter.');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#error-imie').hover(
function(){
    $('#help').css('background-color', '#e52222');
    $('#help h5').text('Imię nie może zawierać cyfr oraz znaków specjalnych i musi składać się z od 2 do 20 liter!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#good-imie').hover(
function(){
    $('#help').css('background-color', '#1bc442');
    $('#help h5').text('Imię poprawne!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

//Nazwisko

function nazwiskoCheck(){
    var nazwiskoValue = document.getElementById('input-nazwisko').value;
    var nazwiskoSpr = regNazwisko.test(nazwiskoValue);
    if (nazwiskoSpr){
        $('#good-nazwisko').css('display', 'inline');
        $('#error-nazwisko').css('display', 'none');
		nazwiskoReg = nazwiskoSpr;
    }
    else {
        $('#good-nazwisko').css('display', 'none');
        $('#info-nazwisko').css('display', 'none');
        $('#error-nazwisko').css('display', 'inline');
		nazwiskoReg = nazwiskoSpr;
    }
};

$('#input-nazwisko').focusin(function(){
		$('#info-nazwisko').css('visibility', 'visible');
	});

$('#input-nazwisko').keyup(function(){
    var nazwiskoValue = document.getElementById('input-nazwisko').value;
    if(nazwiskoValue != ''){
        nazwiskoCheck();
    };
});

$('#input-nazwisko').blur(function(){
    nazwiskoCheck();
});

$('#input-nazwisko').focusout(function(){
		$('#info-nazwisko').css('visibility', 'hidden');
	});

$('#info-nazwisko').hover(
function(){
    $('#help').css('background-color', '#4d9ffe');
    $('#help h5').text('Nazwisko musi składać się z od 2 do 20 liter (30 w przypadku nazwisk dwuczłonowych).');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#error-nazwisko').hover(
function(){
    $('#help').css('background-color', '#e52222');
    $('#help h5').text('Nazwisko nie może zawierać cyfr oraz znaków specjalnych (innych niż myślnik) i musi składać się z od 2 do 20 liter (30 w przypadku nazwisk dwuczłonowych)!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#good-nazwisko').hover(
function(){
    $('#help').css('background-color', '#1bc442');
    $('#help h5').text('Nazwisko poprawne!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

//Login

function loginCheck(){
    var loginValue = document.getElementById('input-login').value;
    var loginSpr = regLogin.test(loginValue);
    if (loginSpr){
        $('#good-login').css('display', 'inline');
        $('#error-login').css('display', 'none');
		loginReg = loginSpr;
    }
    else {
        $('#good-login').css('display', 'none');
        $('#info-login').css('display', 'none');
        $('#error-login').css('display', 'inline');
		loginReg = loginSpr;
    }
};

$('#input-login').focusin(function(){
		$('#info-login').css('visibility', 'visible');
	});

$('#input-login').keyup(function(){
    var loginValue = document.getElementById('input-login').value;
    if(loginValue != ''){
        loginCheck();
    };
});

$('#input-login').blur(function(){
    loginCheck();
});

$('#input-login').focusout(function(){
		$('#info-login').css('visibility', 'hidden');
	});

$('#info-login').hover(
function(){
    $('#help').css('background-color', '#4d9ffe');
    $('#help h5').text('Login musi składać się z od 2 do 21 znaków. Nie może zaczynać ani kończyć się znakiem specjalnym.');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#error-login').hover(
function(){
    $('#help').css('background-color', '#e52222');
    $('#help h5').text('Login nie może zaczynać ani kończyć się znakiem specjalnym i musi składać się z od 2 do 21 znaków!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#good-login').hover(
function(){
    $('#help').css('background-color', '#1bc442');
    $('#help h5').text('Login poprawny!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

//Hasło

function hasloCheck(){
    var hasloValue = document.getElementById('input-haslo').value;
    var hasloSpr = regPass.test(hasloValue);
    var hasloPowtorz = document.getElementById('input-powtorz');
    if (hasloSpr){
        $('#good-haslo').css('display', 'inline');
        $('#error-haslo').css('display', 'none');
        hasloPowtorz.disabled = false;
		passReg = hasloSpr;
    }
    else {
        $('#good-haslo').css('display', 'none');
        $('#info-haslo').css('display', 'none');
        $('#error-haslo').css('display', 'inline');
        hasloPowtorz.disabled = true;
		passReg = hasloSpr;
    }
};

function powtorzCheck(){
var hasloValue = document.getElementById('input-haslo').value;
var powtorzValue = document.getElementById('input-powtorz').value;
    if(hasloValue == powtorzValue){
        $('#good-powtorz').css('display', 'inline');
        $('#error-powtorz').css('display', 'none');
		passRepeatReg = true;
    }
    else {
        $('#good-powtorz').css('display', 'none');
        $('#info-powtorz').css('display', 'none');
        $('#error-powtorz').css('display', 'inline');
		passRepeatReg = false;
    }
}

$('#input-haslo').focusin(function(){
		$('#info-haslo').css('visibility', 'visible');
	});

$('#input-haslo').keyup(function(){
    var hasloValue = document.getElementById('input-haslo').value;
    if(hasloValue != ''){
        hasloCheck();
    };
});

$('#input-haslo').blur(function(){
    hasloCheck();
});

$('#input-haslo').focusout(function(){
		$('#info-imie').css('visibility', 'hidden');
});

$('#input-powtorz').focusin(function(){
		$('#info-powtorz').css('visibility', 'visible');
});

$('#input-powtorz').keyup(function(){
    var powtorzValue = document.getElementById('input-powtorz').value;
    if(powtorzValue != ''){
        powtorzCheck();
    };
});

$('#input-powtorz').blur(function(){
    powtorzCheck();
});

$('#input-powtorz').focusout(function(){
		$('#info-powtorz').css('visibility', 'hidden');
});

$('#info-haslo').hover(
function(){
    $('#help').css('background-color', '#4d9ffe');
    $('#help h5').text('Hasło musi składać się z od 8 do 32 znaków, w tym z przynajmniej jednej wielkiej litery, jednej cyfry oraz jednego znaku specjalnego.');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#error-haslo').hover(
function(){
    $('#help').css('background-color', '#e52222');
    $('#help h5').text('Hasło musi składać się z od 8 do 32 znaków, w tym z przynajmniej jednej wielkiej litery, jednej cyfry oraz jednego znaku specjalnego!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#good-haslo').hover(
function(){
    $('#help').css('background-color', '#1bc442');
    $('#help h5').text('Hasło poprawne!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#info-powtorz').hover(
function(){
    $('#help').css('background-color', '#4d9ffe');
    $('#help h5').text('Powtórz hasło.');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#error-powtorz').hover(
function(){
    $('#help').css('background-color', '#e52222');
    $('#help h5').text('Hasła nie są identyczne!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#good-powtorz').hover(
function(){
    $('#help').css('background-color', '#1bc442');
    $('#help h5').text('Hasła są identyczne!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

//E-mail

function emailCheck(){
    var emailValue = document.getElementById('input-email').value;
	var emailSpr = regMail.test(emailValue);
    if (emailSpr){
        $('#good-email').css('display', 'inline');
        $('#error-email').css('display', 'none');
		mailReg = emailSpr;
    }
    else {
        $('#good-email').css('display', 'none');
        $('#info-email').css('display', 'none');
        $('#error-email').css('display', 'inline');
		mailReg = emailSpr;
    }
};

$('#input-email').focusin(function(){
		$('#info-email').css('visibility', 'visible');
	});

$('#input-email').keyup(function(){
    var emailValue = document.getElementById('input-email').value;
    if(emailValue != ''){
        emailCheck();
    };
});

$('#input-email').blur(function(){
    emailCheck();
});

$('#input-email').focusout(function(){
		$('#info-email').css('visibility', 'hidden');
	});

$('#info-email').hover(
function(){
    $('#help').css('background-color', '#4d9ffe');
    $('#help h5').text('Poprawny email musi zawierać @ i domenę.');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#error-email').hover(
function(){
    $('#help').css('background-color', '#e52222');
    $('#help h5').text('Wprowadź poprawny e-mail!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

$('#good-email').hover(
function(){
    $('#help').css('background-color', '#1bc442');
    $('#help h5').text('E-mail poprawny!');
    $('#help').show(1000);
},
function(){
    $('#help').hide(500);
    $('#help h5').text('');
});

function unlock(){
	if(chkTos.checked & imieReg & nazwiskoReg & loginReg & mailReg & passReg & passRepeatReg){
		$('#btn-register').attr('disabled', false);
		$('#btn-register').css('cursor', 'pointer');
	}
	else {
        $('#btn-register').attr("disabled", true);
        $('#btn-register').css('cursor', 'not-allowed');
	}
};

chkTos.addEventListener('change', unlock);

});
