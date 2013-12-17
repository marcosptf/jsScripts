

function eliminarZerosEsquerda(valor) {
  var ret = "";
  var status = 0;
  for (var i = 0; i < valor.length; i++) {
    if (valor.substr(i, 1) != "0")
      status = 1;
    if (status == 1)
      ret += valor.substr(i, 1);
  }
  return ret;
}


