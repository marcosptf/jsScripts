

/**
 * xajax.tools.getRequestObject
 *
 * This function constructs an XMLHttpRequest object
 * taking into account the various browsers and their support.
 */
if ("undefined" != typeof XMLHttpRequest) {
	xajax.tools.getRequestObject = function() {
		return new XMLHttpRequest();
	}
} else if ("undefined" != typeof ActiveXObject) {
	xajax.tools.getRequestObject = function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP.4.0");
		} catch (e) {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e2) {
				try {
				} catch (e3) {
					return new ActiveXObject("Microsoft.XMLHTTP");
				}
			}
		}
	}
} else if (window.createRequest) {
	xajax.tools.getRequestObject = function() {
		return window.createRequest();
	}
} else {
	xajax.tools.getRequestObject = function() {
		return null;
	}
}




	// Sends a XMLHttpRequest to call the specified PHP function on the server
	// * sRequestType is optional -- defaults to POST
	this.call = function(sFunction, aArgs, sRequestType)
	{
		var i,r,postData;
		if (document.body && xajaxWaitCursor)
			document.body.style.cursor = 'wait';
		if (xajaxStatusMessages == true) window.status = 'Sending Request...';
		clearTimeout(loadingTimeout);
		loadingTimeout = setTimeout("xajax.loadingFunction();",400);
		if (xajaxDebug) this.DebugMessage("Starting xajax...");
		if (sRequestType == null) {
		   var xajaxRequestType = xajaxDefinedPost;
		}
		else {
			var xajaxRequestType = sRequestType;
		}
		var uri = xajaxRequestUri;
		var value;
		switch(xajaxRequestType)
		{
			case xajaxDefinedGet:{
				var uriGet = uri.indexOf("?")==-1?"?xajax="+encodeURIComponent(sFunction):"&xajax="+encodeURIComponent(sFunction);
				if (aArgs) {
					for (i = 0; i<aArgs.length; i++)
					{
						value = aArgs[i];
						if (typeof(value)=="object")
							value = this.objectToXML(value);
						uriGet += "&xajaxargs[]="+encodeURIComponent(value);
					}
				}
				uriGet += "&xajaxr=" + new Date().getTime();
				uri += uriGet;
				postData = null;
				} break;
			case xajaxDefinedPost:{
				postData = "xajax="+encodeURIComponent(sFunction);
				postData += "&xajaxr="+new Date().getTime();
				if (aArgs) {
					for (i = 0; i <aArgs.length; i++)
					{
						value = aArgs[i];
						if (typeof(value)=="object")
							value = this.objectToXML(value);
						postData = postData+"&xajaxargs[]="+encodeURIComponent(value);
					}
				}
				} break;
			default:
				alert("Illegal request type: " + xajaxRequestType); return false; break;
		}
		r = this.getRequestObject();
		if (!r) return false;
		r.open(xajaxRequestType==xajaxDefinedGet?"GET":"POST", uri, true);
		if (xajaxRequestType == xajaxDefinedPost)
		{
			try
			{
				r.setRequestHeader("Method", "POST " + uri + " HTTP/1.1");
				r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			}
			catch(e)
			{
				alert("Your browser does not appear to  support asynchronous requests using POST.");
				return false;
			}
		}
		r.onreadystatechange = function()
		{
			if (r.readyState != 4)
				return;

			if (r.status==200)
			{
				if (xajaxDebug) xajax.DebugMessage("Received:\n" + r.responseText);
				if (r.responseXML && r.responseXML.documentElement)
					xajax.processResponse(r.responseXML);
				else {
					var errorString = "Error: the XML response that was returned from the server is invalid.";
					errorString += "\nReceived:\n" + r.responseText;
					trimmedResponseText = r.responseText.replace( /^\s+/g, "" );// strip leading space
					trimmedResponseText = trimmedResponseText.replace( /\s+$/g, "" );// strip trailing
					if (trimmedResponseText != r.responseText)
						errorString += "\nYou have whitespace in your response.";
					alert(errorString);
					document.body.style.cursor = 'default';
					if (xajaxStatusMessages == true) window.status = 'Invalid XML response error';
				}
			}
			else {
				if (xajax.responseErrorsForAlert.containsValue(r.status)) {
					var errorString = "Error: the server returned the following HTTP status: " + r.status;
					errorString += "\nReceived:\n" + r.responseText;
					alert(errorString);
				}
				document.body.style.cursor = 'default';
				if (xajaxStatusMessages == true) window.status = 'Invalid XML response error';
			}

			delete r;
			r = null;
		}
		if (xajaxDebug) this.DebugMessage("Calling "+sFunction +" uri="+uri+" (post:"+ postData +")");
		r.send(postData);
		if (xajaxStatusMessages == true) window.status = 'Waiting for data...';
		delete r;
		return true;
	}

	//Gets the text as it would be if it were being retrieved from
	//the innerHTML property in the current browser
	this.getBrowserHTML = function(html)
	{
		tmpXajax = this.$(this.workId);
		if (!tmpXajax)
		{
			tmpXajax = document.createElement("div");
			tmpXajax.setAttribute('id',this.workId);
			tmpXajax.style.display = "none";
			tmpXajax.style.visibility = "hidden";
			document.body.appendChild(tmpXajax);
		}
		tmpXajax.innerHTML = html;
		var browserHTML = tmpXajax.innerHTML;
		tmpXajax.innerHTML = '';

		return browserHTML;
	}

	// Tests if the new Data is the same as the extant data
	this.willChange = function(element, attribute, newData)
	{
		if (!document.body)
		{
			return true;
		}
		if (attribute == "innerHTML")
		{
			newData = this.getBrowserHTML(newData);
		}
		elementObject = this.$(element);
		if (elementObject) {
			var oldData;
			eval("oldData=this.$('"+element+"')."+attribute);
			if (newData !== oldData)
				return true;
		}

		return false;
	}

	//Returns the source code of the page after it's been modified by xajax
	this.viewSource = function()
	{
		return "<html>"+document.getElementsByTagName("HTML")[0].innerHTML+"</html>";
	}

	//Process XML xajaxResponses returned from the request
	this.processResponse = function(xml)
	{
		clearTimeout(loadingTimeout);
		this.doneLoadingFunction();
		if (xajaxStatusMessages == true) window.status = 'Processing...';
		var tmpXajax = null;
		xml = xml.documentElement;
		if (xml == null)
			return;

		var skipCommands = 0;
		for (var i=0; i<xml.childNodes.length; i++)
		{
			if (skipCommands > 0) {
				skipCommands--;
				continue;
			}
			if (xml.childNodes[i].nodeName == "cmd")
			{
				var cmd;
				var id;
				var property;
				var data;
				var search;
				var type;
				var before;
				var objElement = null;

				for (var j=0; j<xml.childNodes[i].attributes.length; j++)
				{
					if (xml.childNodes[i].attributes[j].name == "n")
					{
						cmd = xml.childNodes[i].attributes[j].value;
					}
					else if (xml.childNodes[i].attributes[j].name == "t")
					{
						id = xml.childNodes[i].attributes[j].value;
					}
					else if (xml.childNodes[i].attributes[j].name == "p")
					{
						property = xml.childNodes[i].attributes[j].value;
					}
					else if (xml.childNodes[i].attributes[j].name == "c")
					{
						type = xml.childNodes[i].attributes[j].value;
					}
				}
				if (xml.childNodes[i].childNodes.length > 1 && xml.childNodes[i].firstChild.nodeName == "#cdata-section")
				{
					data = "";
					for (var j=0; j<xml.childNodes[i].childNodes.length; j++)
					{
						data += xml.childNodes[i].childNodes[j].data;
					}
				}
				else if (xml.childNodes[i].firstChild && xml.childNodes[i].firstChild.nodeName == 'xjxobj') {
					data = this._nodeToObject(xml.childNodes[i].firstChild);
					objElement = "XJX_SKIP";
				}
				else if (xml.childNodes[i].childNodes.length > 1)
				{
					for (var j=0; j<xml.childNodes[i].childNodes.length; j++)
					{
						if (xml.childNodes[i].childNodes[j].childNodes.length > 1 && xml.childNodes[i].childNodes[j].firstChild.nodeName == "#cdata-section")
						{
							var internalData = "";
							for (var k=0; k<xml.childNodes[i].childNodes[j].childNodes.length;k++)
							{
								internalData+=xml.childNodes[i].childNodes[j].childNodes[k].nodeValue;
							}
						} else {
							var internalData = xml.childNodes[i].childNodes[j].firstChild.nodeValue;
						}

						if (xml.childNodes[i].childNodes[j].nodeName == "s")
						{
							search = internalData;
						}
						if (xml.childNodes[i].childNodes[j].nodeName == "r")
						{
							data = internalData;
						}
					}
				}
				else if (xml.childNodes[i].firstChild)
					data = xml.childNodes[i].firstChild.nodeValue;
				else
					data = "";

				if (objElement != "XJX_SKIP") objElement = this.$(id);
				var cmdFullname;
				try
				{
					if (cmd=="cc") {
						cmdFullname = "addConfirmCommands";
						var confirmResult = confirm(data);
						if (!confirmResult) {
							skipCommands = id;
						}
					}
					if (cmd=="al")
					{
						cmdFullname = "addAlert";
						alert(data);
					}
					else if (cmd=="js")
					{
						cmdFullname = "addScript/addRedirect";
						eval(data);
					}
					else if (cmd=="jc")
					{
						cmdFullname = "addScriptCall";
						var scr = id + '(';
						if (data[0] != null) {
							scr += 'data[0]';
							for (var l=1; l<data.length; l++) {
								scr += ',data['+l+']';
							}
						}
						scr += ');';
						eval(scr);
					}
					else if (cmd=="in")
					{
						cmdFullname = "addIncludeScript";
						this.include(data);
					}
					else if (cmd=="as")
					{
						cmdFullname = "addAssign/addClear";
						if (this.willChange(id,property,data))
						{
							eval("objElement."+property+"=data;");
						}
					}
					else if (cmd=="ap")
					{
						cmdFullname = "addAppend";
						eval("objElement."+property+"+=data;");
					}
					else if (cmd=="pp")
					{
						cmdFullname = "addPrepend";
						eval("objElement."+property+"=data+objElement."+property);
					}
					else if (cmd=="rp")
					{
						cmdFullname = "addReplace";
						this.replace(id,property,search,data)
					}
					else if (cmd=="rm")
					{
						cmdFullname = "addRemove";
						this.remove(id);
					}
					else if (cmd=="ce")
					{
						cmdFullname = "addCreate";
						this.create(id,data,property);
					}
					else if (cmd=="ie")
					{
						cmdFullname = "addInsert";
						this.insert(id,data,property);
					}
					else if (cmd=="ia")
					{
						cmdFullname = "addInsertAfter";
						this.insertAfter(id,data,property);
					}
					else if (cmd=="ci")
					{
						cmdFullname = "addCreateInput";
						this.createInput(id,type,data,property);
					}
					else if (cmd=="ii")
					{
						cmdFullname = "addInsertInput";
						this.insertInput(id,type,data,property);
					}
					else if (cmd=="iia")
					{
						cmdFullname = "addInsertInputAfter";
						this.insertInputAfter(id,type,data,property);
					}
					else if (cmd=="ev")
					{
						cmdFullname = "addEvent";
						property = this.addOnPrefix(property);
						eval("this.$('"+id+"')."+property+"= function(){"+data+";}");
					}
					else if (cmd=="ah")
					{
						cmdFullname = "addHandler";
						this.addHandler(id, property, data);
					}
					else if (cmd=="rh")
					{
						cmdFullname = "addRemoveHandler";
						this.removeHandler(id, property, data);
					}
				}
				catch(e)
				{
					if (xajaxDebug)
						alert("While trying to '"+cmdFullname+"' (command number "+i+"), the following error occured:\n"
							+ e.name+": "+e.message+"\n"
							+ (id&&!objElement?"Object with id='"+id+"' wasn't found.\n":""));
				}
				delete objElement;
				delete cmd;
				delete cmdFullname;
				delete id;
				delete property;
				delete search;
				delete data;
				delete type;
				delete before;
				delete internalData;
				delete j;
				delete k;
			}
		}
		delete xml;
		delete i;
		document.body.style.cursor = 'default';
		if (xajaxStatusMessages == true) window.status = 'Done';
	}
}

var xajax = new Xajax();
xajaxLoaded = true;



