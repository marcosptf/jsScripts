//Fun??o que permite o usu?rio digitar apenas valores monetarios
function fpSomenteFloat(e,txt) {

//alert('8yugihg');

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
		} else {
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
