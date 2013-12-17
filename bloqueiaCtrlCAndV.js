
document.write("&nbsp;")
function Verificar() 
{
var ctrl=window.event.ctrlKey;
var tecla=window.event.keyCode; 
if (ctrl && tecla==67) {alert("CTRL+C não é permitido"); event.keyCode=0; event.returnValue=false;}
if (ctrl && tecla==86) {alert("CTRL+V não é permitido"); event.keyCode=0; event.returnValue=false;}
if (tecla==192) {alert("Valor aspa não é permitido!"); event.keyCode=0; event.returnValue=false;}
if (tecla==226) {alert("Valor barra invertida não é permitido!"); event.keyCode=0; event.returnValue=false;}
}

