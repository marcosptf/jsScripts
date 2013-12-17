
function campo_num_tel(campo,e)
{
	var mascara = '####-####';
	var tecla = (window.Event) ? e.which : e.keyCode;
	var valorCampo = campo.value;
	var seps = ".-,:;/";
	var estaMascara = mascara.substring(valorCampo.length, valorCampo.length + 1);
	var proxMascara = mascara.substring(valorCampo.length + 1, valorCampo.length + 2);
	var ret = false;

	if ( tecla == 8 || tecla == 9 || tecla == 13 || tecla == 0 ) { return true; } // BackSpace, TAB ou ENTER
	if ( tecla > 47 && tecla < 58 && ( estaMascara == "#" || estaMascara == "?" ) == true ) { ret = true; } // Nmeros
	if ( tecla > 96 && tecla < 123 && ( estaMascara == "@" || estaMascara == "?" ) == true ) { ret = true; } // Letras
	if ( tecla > 64 && tecla < 91 && ( estaMascara == "@" || estaMascara == "?" ) == true ) { ret = true; }
	if ( ret == true ) {
		campo.value = campo.value + String.fromCharCode(tecla);
		if (seps.indexOf(proxMascara) > -1 ) {
			campo.value = campo.value + proxMascara;
		}
	}
	return false;
}


function campo_num_ddd(campo,e)
{
	var mascara = '##';
	var tecla = (window.Event) ? e.which : e.keyCode;
	var valorCampo = campo.value;
	var seps = ".-,:;/";
	var estaMascara = mascara.substring(valorCampo.length, valorCampo.length + 1);
	var proxMascara = mascara.substring(valorCampo.length + 1, valorCampo.length + 2);
	var ret = false;

	if ( tecla == 8 || tecla == 9 || tecla == 13 || tecla == 0 ) { return true; } // BackSpace, TAB ou ENTER
	if ( tecla > 47 && tecla < 58 && ( estaMascara == "#" || estaMascara == "?" ) == true ) { ret = true; } // Nmeros
	if ( tecla > 96 && tecla < 123 && ( estaMascara == "@" || estaMascara == "?" ) == true ) { ret = true; } // Letras
	if ( tecla > 64 && tecla < 91 && ( estaMascara == "@" || estaMascara == "?" ) == true ) { ret = true; }
	if ( ret == true ) {
		campo.value = campo.value + String.fromCharCode(tecla);
		if (seps.indexOf(proxMascara) > -1 ) {
			campo.value = campo.value + proxMascara;
		}
	}
	return false;
}



function validarDdd(pDdd)
{
    if (isNaN(pDdd) || pDdd.length < 2) {
        return false;
    }

    return true;
}

function validarTelefone(pTelefone)
{
    if (isNaN(pTelefone)) {
        return false;
    }

    if (pTelefone.length < 7) {
        return false;
    }

    if ((pTelefone == "22222222") ||
        (pTelefone == "2222222") ||
        (pTelefone == "33333333") ||
        (pTelefone == "3333333") ||
        (pTelefone == "44444444") ||
        (pTelefone == "4444444") ||
        (pTelefone == "55555555") ||
        (pTelefone == "5555555") ||
        (pTelefone == "66666666") ||
        (pTelefone == "6666666")) {
        return false;
    }

    if ((pTelefone.substr(0, 1) < 2) || (pTelefone.substr(0, 1) > 6)) {
        return false;
    }

    return true;
}

function validarCelular(pCelular)
{
    if (isNaN(pCelular)) {
        return false;
    }

    if (pCelular.length < 8) {
        return false;
    }

    if ((pCelular == "66666666") ||
        (pCelular == "6666666") ||
        (pCelular == "77777777") ||
        (pCelular == "7777777") ||
        (pCelular == "88888888") ||
        (pCelular == "8888888") ||
        (pCelular == "99999999") ||
        (pCelular == "9999999")) {
        return false;
    }

    if ((pCelular.substr(0, 1) < 6)) {
        return false;
    }

    return true;
}


