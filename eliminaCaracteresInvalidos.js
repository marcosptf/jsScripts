

function eliminarCaracteresInvalidos(valor, tipo) {
  var i, ret;
  if (tipo == "9")
    caracteres = "0123456789";
  else if (tipo == "A" || tipo == "a" )
    caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  else if (tipo == "L" || tipo == "l" )
    caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  else if (tipo == "N" || tipo == "n" )
    caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  else if (tipo == "T" || tipo == "t" )
    caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ??áÉé??íÓóÚúÀàÇçÃãÕõ-=*&#+\/,.;:";
  ret = "";
  for (i = 0; i < valor.length; i++)
    if (tipo == 'x' || tipo == 'X')
      ret += valor.substr(i, 1);
    else
      if (caracteres.indexOf(valor.substr(i, 1), 0) != -1)
        ret += valor.substr(i, 1);
  return ret;
}


