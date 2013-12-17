
	function verificaEmail(form, campo){
		doc = document.form;
		arroba	= doc.campo.value.indexOf("@");
		ponto	= doc.campo.value.indexOf(".");
		tamanho	= doc.campo.value.lenght;
		verificaText(form, campo);

		if(!(arroba >== 3 && ponto >== 6 || ponto >== 2 && tamanho >== 9)){
			alert("Preencha corretamente o campo "+campo+".");
		}
	}


//funcao para tratar o campo e-mail
function Trat_email(id_campo)
{
  var content=document.getElementById(id_campo).value;
  if (content.length>10)
  {
    if (document.getElementById(id_campo).value.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1)
    {
        document.getElementById('erro_email').style.display = "none";
        document.getElementById('submit').style.display = "inline";
    }
    else
    {
    //alert("false 1");
    document.getElementById('erro_email').style.display = "inline";
    document.getElementById('submit').style.display = "none";
    }
  }
  else
  {
  //alert("false2");
  document.getElementById('erro_email').style.display = "inline";
  document.getElementById('submit').style.display = "none";
  }
  document.getElementById(id_campo).focus();
}

//funcao para tratar o campo e-mail
function Trat_email_2(id_campo)
{
  var content=document.getElementById(id_campo).value;
  if (content.length>10)
  {
    if (document.getElementById(id_campo).value.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1)
    {
        document.getElementById('erro_email_2').style.display = "none";
        document.getElementById('submit').style.display = "inline";
    }
    else
    {
    //alert("false 1");
    document.getElementById('erro_email_2').style.display = "inline";
    document.getElementById('submit').style.display = "none";
    }
  }
  else
  {
  //alert("false2");
  document.getElementById('erro_email_2').style.display = "inline";
  document.getElementById('submit').style.display = "none";
  }
  document.getElementById(id_campo).focus();
}



function validaEmail(pDados){
    if((pDados!=undefined) || (pDados!=null) || (pDados!="")){
        if(pDados.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/)!=-1){
            return false;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function validarEmail(pEmail)
{
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(pEmail);
}
	function verificaEmail(form, campo){
		doc = document.form;
		arroba	= doc.campo.value.indexOf("@");
		ponto	= doc.campo.value.indexOf(".");
		tamanho	= doc.campo.value.lenght;
		verificaText(form, campo);

		if(!(arroba >== 3 && ponto >== 6 || ponto >== 2 && tamanho >== 9)){
			alert("Preencha corretamente o campo "+campo+".");
		}
	}


//funcao para tratar o campo e-mail
function Trat_email(id_campo)
{
  var content=document.getElementById(id_campo).value;
  if (content.length>10)
  {
    if (document.getElementById(id_campo).value.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1)
    {
        document.getElementById('erro_email').style.display = "none";
        document.getElementById('submit').style.display = "inline";
    }
    else
    {
    //alert("false 1");
    document.getElementById('erro_email').style.display = "inline";
    document.getElementById('submit').style.display = "none";
    }
  }
  else
  {
  //alert("false2");
  document.getElementById('erro_email').style.display = "inline";
  document.getElementById('submit').style.display = "none";
  }
  document.getElementById(id_campo).focus();
}

//funcao para tratar o campo e-mail
function Trat_email_2(id_campo)
{
  var content=document.getElementById(id_campo).value;
  if (content.length>10)
  {
    if (document.getElementById(id_campo).value.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1)
    {
        document.getElementById('erro_email_2').style.display = "none";
        document.getElementById('submit').style.display = "inline";
    }
    else
    {
    //alert("false 1");
    document.getElementById('erro_email_2').style.display = "inline";
    document.getElementById('submit').style.display = "none";
    }
  }
  else
  {
  //alert("false2");
  document.getElementById('erro_email_2').style.display = "inline";
  document.getElementById('submit').style.display = "none";
  }
  document.getElementById(id_campo).focus();
}



function validaEmail(pDados){
    if((pDados!=undefined) || (pDados!=null) || (pDados!="")){
        if(pDados.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/)!=-1){
            return false;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function validarEmail(pEmail)
{
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(pEmail);
}




