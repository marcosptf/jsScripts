
function preencheZeros(Numero, Tamanho) {

  var Diferenca

  Numero = allTrim(Numero)
  Diferenca = Tamanho - Numero.length
  for (var i=0; i < Diferenca; i++)
    {
    Numero = "0" + Numero
    }

  return Numero

}


