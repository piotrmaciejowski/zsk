var inf = 0;
var ips = 0;
var infPlus = 0;

var elZSK = document.getElementById('zsk');
var elInf = document.getElementById('inf');
var elRenk = document.getElementById('renk');
var elJadwich = document.getElementById('jadwich');
var elRyszard = document.getElementById('ryszard');
var elIps = document.getElementById('ips');

window.onload = setInterval(fIps, 1000);
window.onload = setInterval(fInf, 1000);

function fIps() {
	elIps.innerHTML = 'Informatycy na sekundę: ' + ips;
};

function fInf() {
	inf += ips;
	elInf.innerHTML = inf;
}

elZSK.onclick = function() {
	inf++;
	elInf.innerHTML = inf;
}

elRenk.onclick = function() {
	
	if (inf >= 20) {
		
		inf -= 20;
		ips ++;

	};
};

elJadwich.onclick = function() {
	
	if (inf >= 150) {
		
		inf -= 150;
		ips += 5;
	};
};

elRyszard.onclick = function() {
	
	if (inf >= 1000) {
		
		inf -= 1000;
		ips += 20;
	};
};