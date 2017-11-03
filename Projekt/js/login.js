btnUnlock = document.getElementById('btn-login');

function unlockBtn(){
    if ($('#input-login').val() != '' & $('#input-haslo').val() != ''){
        btnUnlock.disabled = false;
        btnUnlock.style.color = '#1bc442';
    }
    else {
        btnUnlock.disabled = true;
        btnUnlock.style.color = '#808080';
    }
};

$('#input-login').on('keyup', unlockBtn);
$('#input-haslo').on('keyup', unlockBtn);

$('#btn-login').click(function(){
    $('#login-ready').css('display', 'none');
    $('#login-loading').css('display', 'inline-block');
});

