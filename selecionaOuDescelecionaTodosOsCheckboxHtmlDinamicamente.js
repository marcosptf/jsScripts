
function selectAll()
{
    var checkdocs = document.getElementsByTagName('input');

    for(i=0 ; i < checkdocs.length;i++)
    {
        if (checkdocs[i].type == 'checkbox' && checkdocs[i].name != 'marcatudo' && document.getElementById('marcatudo').checked != true)
        {
            checkdocs[i].checked = false;
        }
        else if(checkdocs[i].type == "checkbox" && checkdocs[i].name != 'marcatudo' && document.getElementById('marcatudo').checked != false)
        {
            checkdocs[i].checked = true;
        }
    }
}


function selectAllModulos(pElem, pClassName)
{
  if($(pElem).attr('checked')){
    $(".prod_"+pClassName).attr('checked', 'checked')
  } else {
      $(".prod_"+pClassName).removeAttr('checked');
  }
}

function clearCheck(nome){
	for (var i = 0; i < document.form1.elements.length; i++) {
	  if(document.form1.elements[i].name.indexOf(nome) > -1){
		  	document.form1.elements[i].checked = false;
	  }
	}
}
