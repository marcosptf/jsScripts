
	function verificaData(form, campo){
		doc = document.form;
		verificaText(form, campo);

		agora	= new Date();
		esseAno	= agora.getFullYear();
		separa	= doc.campo.value.split("/");

		if(separa.lenght == 3){
			dia			= separa[0];
			mes			= separa[1];
			ano			= separa[2];
			verificador = !isNaN(dia) && (dia > 0) && (dia <32) && !isNaN(mes) &&  (mes > 0) && (mes <13) && !isNaN(ano) && (ano.lenght == 4) && (ano > 1900) && (ano < esseAno);
			if(!verificador){
				alert("Preencha corretamente o campo "+campo+".");
			}
		}

	}


    function VerificaData(cData) {

    //alert(cData);
    var data = cData;
    var tam = data.length;
    if (tam != 10) {
 return false;
    }
    var dia = data.substr(0,2)
    var mes = data.substr (3,2)
    var ano = data.substr (6,4)
    if (ano < 1980)    {
 return false;
    }
   if (ano > 2010)    {
 return false;
    }

    switch (mes) {
 case '01':
     if  (dia <= 31)
   return (true);
     break;
 case '02':
     if  (dia <= 29)
   return (true);
     break;
 case '03':
     if  (dia <= 31)
   return (true);
     break;
 case '04':
     if  (dia <= 30)
   return (true);
     break;
 case '05':
     if  (dia <= 31)
   return (true);
     break;
 case '06':
     if  (dia <= 30)
   return (true);
     break;
 case '07':
     if  (dia <= 31)
   return (true);
     break;
 case '08':
     if  (dia <= 31)
   return (true);
     break;
 case '09':
     if  (dia <= 30)
   return (true);
     break;
 case '10':
     if  (dia <= 31)
   return (true);
     break;
 case '11':
     if  (dia <= 30)
   return (true);
     break;
 case '12':
     if  (dia <= 31)
   return (true);
     break;
    }
    {
 return false;
    }
    return true;
}


function Valida_Data(id_campo)
{
	var dia = document.getElementById(id_campo).value;

	if (dia < 0 || dia > 28)
        {
		document.getElementById('data').style.display = "inline";
		document.getElementById('envia').style.display = "none";
		document.getElementById('cancelar').style.display = "none";
		document.getElementById(id_campo).focus();
	}
	else
        {
		document.getElementById('data').style.display = "none";
		document.getElementById('envia').style.display = "inline";
		document.getElementById('cancelar').style.display = "inline";
	}
}


function validarData(pData)
{
    if (pData.length > 0) {
        var dataSplit = pData.split('/');
        if (dataSplit.length != 3) {
            return false;
        }

        var vlDia = dataSplit[0];
        var vlMes = dataSplit[1];
        var vlAno = dataSplit[2];

        if ((vlDia.length != 2) || (vlMes.length != 2) || (vlAno.length != 4)) {
            return false;
        }

        var vlBisexto = vlAno - 4 * Math.floor(vlAno / 4);
        var vlMeses30 = new Array('', '04', '06', '09', '11');
        var vlMeses31 = new Array('', '01', '03', '05', '07', '08', '10', '12');
        var vlMeses28 = 2;

        if ($.inArray(vlMes, vlMeses30) != -1) {
            if (vlDia >= 1 && vlDia <= 30) {
                return true;
            }
        } else if ($.inArray(vlMes, vlMeses31) != -1) {
            if (vlDia >= 1 && vlDia <= 31) {
                return true;
            }
        } else if ($.inArray(vlMes, vlMeses28) != -1) {
            if (vlBisexto != 0) {
                if (vlDia >= 1 && vlDia <= 28) {
                    return true;
                }
            } else {
                if (vlDia >= 1 && vlDia <= 29) {
                    return true;
                }
            }
        }
    }

    return false;
}


