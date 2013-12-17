
function inserirMascara(valor, mascara) {
  var fimValor, fimMascara, posV, posM, ret;
  ret = "";
  posV = 0;
  posM = 0;
  fimValor = false;
  fimMascara = (mascara.length == 0) ? true : false;
  while (posV < valor.length) {
	//adiciona ponto e virgula conforme mascara
    if (!fimMascara && mascara.substr(posM, 1) != "X") {
      ret += mascara.substr(posM, 1);
      posM++;
      if (posM == mascara.length)
        fimMascara = true;
      }
    else {//adiciona os numeros
      ret += valor.substr(posV, 1);
      posV++;
      posM++;
    }
  }
  return ret;
}

