var credits = 0;
var cps = 0;

var elH1Credits = document.getElementById

window.onload = setInterval(fcps, 10);
window.onload = setInterval(fcredits, 10);

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