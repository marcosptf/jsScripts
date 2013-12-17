 
//funç?o para permitir somente letras e acentos
function Trat_letra(e)
{
  var navegador= (navigator.appName == "Netscape") ? "NT" : "IE";
  var charCode = (navegador == "NT") ? e.which : e.keyCode;
  var caracteres = ' bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVXWYZ?????â?îô?äë?öüáéíóú???????Â?ÎÔ?ÄË?ÖÜÁÉÍÓÚ??aeiouAEIOUçÇ´`^¨~-/';
  var palavra = String.fromCharCode(charCode);
  return (charCode == 127 || charCode == 8 || charCode == 9 || charCode == 13 || charCode == 0 || (caracteres.indexOf(palavra) != -1))

  //verifica return                   acentos                   letras maiusculas            letras minusculas & acentos       acento til        botao delete
  //return ((charCode == 8) || (charCode>43 && charCode<48) || (charCode>64 && charCode<91) || (charCode>93 && charCode<123)  || (charCode=126) || (charCode=127))

}


/********************************************************
* Inclus?o da funç?o fSomenteTexto
* @author: CNS
* @since 19/12/2008 17:50.
******************************************************* */
function fSomenteTexto(e,txt) {
	var navegador = (navigator.appName == "Netscape") ? "NT" : "IE";
	var charCode = (navegador == "NT") ? e.which : e.keyCode;

	if (charCode != 0 && charCode != 8 && (charCode  > 47 && charCode  < 58)) {
		if (navegador=="NT") {
			return e.preventDefault();
		} else {
			e.returnValue = false;
		}
	}
}

function addslashes(str) {
            str=str.replace(/\\/g,'\\\\');
            str=str.replace(/\'/g,'\\\'');
            str=str.replace(/\"/g,'\\"');
            str=str.replace(/\0/g,'\\0');
            return str;
            }
            function stripslashes(str) {
            str=str.replace(/\\'/g,'\'');
            str=str.replace(/\\"/g,'"');
            str=str.replace(/\\0/g,'\0');
            str=str.replace(/\\\\/g,'\\');
            return str;
            }


