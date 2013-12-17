
function formataMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e,tamMax, decimais)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    var decimais = (!decimais) ? 2 : decimais;
    // 13=enter, 8=backspace as demais retornam 0(zero)
    // whichCode==0 faz com que seja possivel usar todas as teclas como delete, setas, etc

     if ((whichCode == 13) || (whichCode == 0) || (whichCode == 8))
    	return true;
    key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave


    if (strCheck.indexOf(key) == -1)
    	return false; // Chave inv?lida
    len = objTextBox.value.length;
    for(i = 0; i < len; i++)
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal))
        	break;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1)
        	aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    //var decimais = 3;
    if (len == 0)
    	objTextBox.value = '';
    if(len <= decimais)
        //if(){}
    	objTextBox.value = '0'+ SeparadorDecimal + aux;

    //if (len == 1)
    //	objTextBox.value = '0'+ SeparadorDecimal + aux;
    //if (len <= 2)
    //	objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > decimais) {
        aux2 = '';
        for (j = 0, i = len - (decimais+1); i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        if(len >= tamMax)return false;
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - (decimais), len);
    }

    return false;
}




