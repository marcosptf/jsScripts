
function fpMascaraData(campo, e) {
	var vCampo = campo;
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;
	var tecla = (window.Event) ? e.which : e.keyCode;

	//alert(tecla);
	if (tecla != 8 && tecla != 0) {
		if (document.getElementById(vCampo).value.length == 2 || document.getElementById(vCampo).value.length == 5) {
			document.getElementById(vCampo).value += "/";
		}
	}
}

