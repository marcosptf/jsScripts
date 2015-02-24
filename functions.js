function jsconfirm(strText, strURL) {
    if (confirm(strText)) {
        window.location = strURL
    }
}
function send_cmd(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;
if (keycode == 13)
   {
   myfield.form.submit();
   return false;
   }
else
   return true;
}
function anykey(myfield) {
    myfield.form.submit();
}

function ajax(stritem,strurl)
{
var xmlHttp;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    try
      {
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    catch (e)
      {
      document.getElementById(stritem).innerHTML="Your browser does not support AJAX!";
      return false;
      }
    }
  }
  xmlHttp.onreadystatechange=function()
    {
    if(xmlHttp.readyState==4)
      {
      document.getElementById(stritem).innerHTML=xmlHttp.responseText;
      }
    }
  xmlHttp.open("GET",strurl,true);
  xmlHttp.send(null);
}
function percentCount(secLeft, secTotal, outputID) {
    var perc = '';
    var onePerc = (secTotal * 10) / 100;
    percInt = Math.floor(100 - ((secLeft * 10) / onePerc));
    if (percInt > 100) { percInt = 100 }
    perc = percInt + '';
    document.getElementById("percentOutput" + outputID).innerHTML = perc;
}
function loadingpercentCount(secLeft, secTotal, outputID) {
    var perc = '';
    var onePerc = (secTotal * 10) / 100;
    percInt = Math.floor(100 - ((secLeft * 10) / onePerc));
    if (percInt > 100) { percInt = 100 }
    perc = percInt + '';
    document.getElementById("percentOutput" + outputID).innerHTML = perc;
    document.getElementById("imageOut" + outputID).style.width = perc + '%';
}
function t_minus() {
    var in_reload = 0;
    for (i = 1; ; i++) {
        myElement = document.getElementById("timer" + i);
        myElement2 = document.getElementById("sectotal" + i);
        if (myElement != null) {
            sek = t_format1(myElement) - 1;
            if (myElement2 != null) {
                percentCount(sek, myElement2.innerHTML, i);
            }
            if (sek < 0) {
                if (in_reload == 0) {
                    in_reload = 1;
                }
            }
            else {
                sek = t_format2(sek); myElement.innerHTML = sek;
            }
        }
        else break;
    }
    setTimeout("t_minus()", 1000);
}
function t_minus_reload() {
    var in_reload = 0;
    for (i = 1; ; i++) {
        myElement = document.getElementById("timer" + i);
        myElement2 = document.getElementById("sectotal" + i);
        if (myElement != null) {
            sek = t_format1(myElement) - 1;
            if (myElement2 != null) {
                percentCount(sek, myElement2.innerHTML, i);
            }
            if (sek < 0) {
                if (in_reload == 0) {
                    in_reload = 1;
                    setTimeout("document.location.reload()", 1000);
                }
            }
            else {
                sek = t_format2(sek); myElement.innerHTML = sek;
            }
        }
        else break;
    }
    setTimeout("t_minus_reload()", 1000);
}
function loading_reload() {
    var in_reload = 0;
    for (i = 1; ; i++) {
        myElement = document.getElementById("timer" + i);
        myElement2 = document.getElementById("sectotal" + i);
        if (myElement != null) {
            sek = t_format1(myElement) - 1;
            if (myElement2 != null) {
                loadingpercentCount(sek, myElement2.innerHTML, i);
            }
            if (sek < 0) {
                if (in_reload == 0) {
                    in_reload = 1;
                    setTimeout("document.location.reload()", 1000);
                }
            }
            else {
                sek = t_format2(sek); myElement.innerHTML = sek;
            }
        }
        else break;
    }
    setTimeout("loading_reload()", 1000);
}
function dc_reload() {
    var in_reload = 0;
    for (i = 1; ; i++) {
        myElement = document.getElementById("dc" + i);
        if (myElement != null) {
            sek = t_format1(myElement) - 1;
            if (sek < 0) {
                if (in_reload == 0) {
                    in_reload = 1;
                    setTimeout("document.location.reload()", 1000);
                }
            }
            else {
                sek = t_format2(sek); myElement.innerHTML = sek;
            }
        }
        else break;
    }
    setTimeout("dc_reload()", 1000);
}
function t_format1(myElement) {
    p = myElement.innerHTML.split(":");
    sek = p[0] * 3600 + p[1] * 60 + p[2] * 1;
    return sek;
}
function t_format2(s) {
    if (s > -1) {
        stunden = Math.floor(s / 3600);
        minuten = Math.floor(s / 60) % 60;
        sekunden = s % 60; t = stunden + ":";
        if (minuten < 10) { t += "0"; } t += minuten + ":";
        if (sekunden < 10) { t += "0"; } t += sekunden;
    } else { t = "0:00:0?"; }
    return t;
}
function Q() {
    return new Date().getTime();
}
function A() {
    return Math.round(Q() / 1000);
}
function P(f) {
    o = Q() - timer[f].start;
    if (o >= 0) {
        T = Math.round(timer[f].R + o * (timer[f].ar / 3600000));
        if (T >= timer[f].K) {
            T = timer[f].K;
        }
        else {
            window.setTimeout("P('" + f + "')", timer[f].aM);
        }
        F[f].value = T;
        timer[f].ad.innerHTML = T + '/' + timer[f].K;
        if (f == 'silver') {
            formatsilver(T);
        }
    }
}
function G(f) {
    c = document.getElementById(f);
    if (c != null) {
        F[f] = new Object();
        am = c.innerHTML.split("/");
        R = parseInt(am[0]);
        K = parseInt(am[1]);
        r = c.title;
        if (r != 0) {
            aq = Q();
            timer[f] = new Object();
            timer[f].start = aq;
            timer[f].ar = r;
            timer[f].R = R;
            timer[f].K = K;
            timer[f].aM = 3600000 / r;
            H = 100;
            if (timer[f].aM < H) {
                timer[f].aM = H;
            }
            timer[f].ad = c;
            P(f);
        }
    }
};
function ChkAll() 
{ 
for (var i=0;i<document.form.elements.length;i++) 
{ 
var obj = document.form.elements[i]; 
if (obj.type=="checkbox") 
obj.checked = document.form.chk.checked; 
} 
} 
