
function ObjetoRequisicao () {
	if (window.ActiveXObject) {
		try {
			objreq = new ActiveXObject("MSXML2.XMLHTTP");
		}
		catch (e) {
			objreq = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	else {
		try {
			objreq = new XMLHttpRequest();
		}
		catch (e) {
			objreq = false;
		}
	}
	return objreq;
}

// Instancia XMLHttpRequest
var http = ObjetoRequisicao();

// Conexão com o servidor
function enviaReq(localizacao)
{
	var self = this;

	if (localizacao == 'busca')
	{
		var disciplina = document.getElementById('disciplina').value;
		var classe = document.getElementById('classe').value;
		var autor = document.getElementById('autor').value;
		var dia = document.getElementById('dia').value;
		var mes = document.getElementById('mes').value;
		var ano = document.getElementById('ano').value;
		var arquivo = document.getElementById('arquivo').value;

		var vars = 'disciplina=' + disciplina + '&classe=' + classe + '&autor=' + autor + '&dia=' + dia + '&mes=' + mes + '&ano=' + ano + '&arquivo=' + arquivo;
		var pagina = 'resultados.php';
		var div = 'resultados';

		self.http.onreadystatechange = manipulaResp(div);
		self.http.open('POST', pagina, false);
		self.http.setRequestHeader("Connection", "close");
        self.http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		self.http.setRequestHeader("Method", "POST " + vars + " HTTP/1.1")
		self.http.send(vars);
	}
	if (localizacao == 'solicitacao')
	{

	}
	if (localizacao == 'enviar')
	{

	}
	alert(vars)
	return http;
}

function manipulaResp(div)
{
	alert("mudou de status" + http.readyState);
	if (http.readyState == 1)
	{
		document.getElementById(div).innerHTML = "buscando...";
	}
	if (http.readyState == 2)
	{
		document.getElementById(div).innerHTML = "buscando...";
	}
	if (http.readyState == 3)
	{
		document.getElementById(div).innerHTML = "recebendo dados...";
	}
	if (http.readyState == 4)
	{
		if (http.status == 200)
		{
			var resposta = http.responseText;
			document.getElementById(div).innerHTML = resposta;
		}
		if (http.status == 404)
		{
			var resposta = "Erro 404";
			document.getElementById(div).innerHTML = resposta;
		}
	}
}


function getXmlHttpRequest() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function CarregarFuncionalidade(urlArquivo, nomeDiv, strData){

	document.getElementById("carregando").style.display = "";
	document.getElementById("escuro").style.display = "";

	strData = "id_usuario_aux=" + document.getElementById("id_usuario_aux").value + "&" + strData;

	xmlhttp.open("POST", urlArquivo + "?rnd=" + Math.random(), true);

	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader('Content-length', strData.length);

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4){
			document.getElementById(nomeDiv).innerHTML = xmlhttp.responseText;
			document.getElementById("carregando").style.display = "none";
			document.getElementById("escuro").style.display = "none";
		}
	}

	xmlhttp.send(strData);
}


