
	function MascaraCEP(campo,e) {
              // onKeyPress="javascript:return MascaraCEP(this,event);"
	var mascara = '#####-###';
	var tecla = (window.Event) ? e.which : e.keyCode;
	var valorCampo = campo.value;
	var seps = ".-,:;/";
	var estaMascara = mascara.substring(valorCampo.length, valorCampo.length + 1);
	var proxMascara = mascara.substring(valorCampo.length + 1, valorCampo.length + 2);
	var ret = false;

	if ( tecla == 8 || tecla == 9 || tecla == 13 || tecla == 0 ) { return true; } // BackSpace, TAB ou ENTER
	if ( tecla > 47 && tecla < 58 && ( estaMascara == "#" || estaMascara == "?" ) == true ) { ret = true; } // Nmeros
	if ( tecla > 96 && tecla < 123 && ( estaMascara == "@" || estaMascara == "?" ) == true ) { ret = true; } // Letras
	if ( tecla > 64 && tecla < 91 && ( estaMascara == "@" || estaMascara == "?" ) == true ) { eet = true; }
	if ( ret == true ) {
		campo.value = campo.value + String.fromCharCode(tecla);
		if (seps.indexOf(proxMascara) > -1 ) {
			campo.value = campo.value + proxMascara;
		}
	}
	return false;
}


