 

	function verificaText(form, campo){
		doc = document.form;

		if(doc.campo.value == ''){
			alert("Preencha o campo "+campo+".");
			doc.campo.focus();
			returne false;
		}
	}


