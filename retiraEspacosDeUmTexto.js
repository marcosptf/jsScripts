
function leftTrim(cTexto) {
  var cNovoTexto = "";
  for (var i=0; i < cTexto.length; i++) {
    if (cTexto.substr(i, 1) != " ") {
      cNovoTexto = cTexto.substr(i);
      break;
    }
  }
  return cNovoTexto;
}

function rightTrim(cTexto) {
  var cNovoTexto = "";
  for (var i = (cTexto.length - 1); i > -1 ; i--) {
    if (cTexto.substr(i, 1) != " ") {
      cNovoTexto = cTexto.substr(0, i + 1);
      break;
    }
  }
  return cNovoTexto;
}

function allTrim(cTexto) {
  return leftTrim(rightTrim(cTexto));
}

function alltrim(str){
	str = str.replace(/^\s+|\s+$/g, "");
	return str;
}

function TratarQuery(str){
	str = alltrim(str);
	str = str.replace(/"/g, '@aspas_dbl@');
	str = str.replace(/'/g, '@aspas@');
	str = str.replace(/>/g, '@maior@');
	str = str.replace(/</g, '@menor@');
	str = str.replace(/\|\|/g, '@pipe@');
	str = str.replace(/\+/g, '@mais@');
	str = escape(str);
	return str;
}

function TratarTexto(texto){
	texto = alltrim(escape(texto));
	return texto;
}


