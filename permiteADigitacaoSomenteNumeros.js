
function soNumeros(v){ return v.replace(/\D/g,""); }


function fpSomenteNumero(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;

	//alert(charCode);
	if (charCode != 13 &&
		charCode != 9 &&
		charCode != 0 &&
		charCode != 8 &&
	   (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		} else {
			e.returnValue = false;
		}
	} else {
		if (txt.value.search(",") >= 0 &&
			charCode == 44 &&
			charCode == 46 &&
			charCode == 8) {
			if (navegador=="NT") {
				return e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}
	}
}


function just_int(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;
	if (charCode != 0 && charCode != 8 && (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		}
		else {
			e.returnValue = false;
		}
	} else {
		if (txt.value.search(",") >= 0 && charCode == 44 && charCode == 46 && charCode == 8) {
			if (navegador=="NT") {
				return e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}
	}
}

function just_float(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;

	if (charCode == 44 || charCode == 46){
		if (charCode == 46){
			charCode = null;
		}
		if (txt.value.length > 0){
			temvirg = txt.value.indexOf(',');
			tempont = txt.value.indexOf('.');
			if (temvirg >= 1 || tempont >= 1){
				charCode = null;
			}
		}else{
			charCode = null;
		}
	 }

	if (charCode != 0 && charCode != 8 && charCode != 44 && charCode != 46 && (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		}
		else {
			e.returnValue = false;
		}
	} else {
		if (txt.value.search(",") >= 0 && charCode == 44 && charCode == 46 && charCode == 8) {
			if (navegador=="NT") {
				return e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}
	}
}

function just_date(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;
	if (charCode != 0 && charCode != 47 && charCode != 8 && (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		}
		else {
			e.returnValue = false;
		}
	}
}

function slash_num(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;
	if (charCode != 0 && charCode != 45 && charCode != 8 && (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		} else {
			e.returnValue = false;
		}
	}
}

//Criado Arquivo com as funç?es javascript do arquivo prv_cnab_insere.php- Por: CNS - Data: 06/10/2008 ?s 15:40
function fSomenteNumero(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;

	//alert(charCode);
	if (charCode != 13 &&
		charCode != 9 &&
		charCode != 0 &&
		charCode != 8 &&
	   (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		} else {
			e.returnValue = false;
		}
	} else {
		if (txt.value.search(",") >= 0 &&
			charCode == 44 &&
			charCode == 46 &&
			charCode == 8) {
			if (navegador=="NT") {
				return e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}
	}
}

function fValidaSeuNum(e,txt) {
        //alert(txt.search(","));

	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;

	//alert(charCode+" charcode");
        //alert(navegador+" navegador");
	 if (charCode != 13 &&
		charCode != 9 &&
		charCode != 0 &&
		charCode != 8 &&
                charCode != 44 &&
	   (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		} else {
			e.returnValue = false;
		}
	} else {
		if (charCode == 46 && charCode == 8)
                {
			if (navegador=="NT") {
				return e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}


	}
}


function fpSomenteNumero(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;

	//alert(charCode);
	if (charCode != 13 &&
		charCode != 9 &&
		charCode != 0 &&
		charCode != 8 &&
	   (charCode  < 48 || charCode  > 57)) {
		if (navegador=="NT") {
			return e.preventDefault();
		} else {
			e.returnValue = false;
		}
	} else {
		if (txt.value.search(",") >= 0 &&
			charCode == 44 &&
			charCode == 46 &&
			charCode == 8) {
			if (navegador=="NT") {
				return e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}
	}
}



