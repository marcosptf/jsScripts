

fCol='orange';//face colour.
dCol='000000';//dot colour.
hCol='green';//hours colour.
mCol='red';//minutes colour.
sCol='blue';//seconds colour.
ClockHeight=35;
ClockWidth=35;
ClockFromMouseY=80;
ClockFromMouseX=5;

ns=(document.layers);
ie=(document.all);
h=3;
m=4;
s=5;
face='1 2 3 4 5 6 7 8 9 10 11 12';
face=face.split(' ');
n=face.length;
speed=0.6;
ymouse=0;
xmouse=0;
scrll=0;
p="<font face=verdanal size=1 color="+fCol+">";
e=360/n;
HandHeight=ClockHeight/4;
HandWidth=ClockWidth/4;
HandY=0;
HandX=0;
scrll=0;
y=new Array();x=new Array();Y=new Array();X=new Array();
for (i=0; i < 37; i++){y[i]=0;x[i]=0;Y[i]=0;X[i]=0}
Dy=new Array();Dx=new Array();DY=new Array();DX=new Array();
for (i=0; i < n; i++){Dy[i]=0;Dx[i]=0;DY[i]=0;DX[i]=0}
if (ns){
for (i=0; i < n; i++)
document.write('<layer name="nsN'+i+'" top=0 left=0 height=15 width=15><center>'+p+face[i]+'</font></center></layer>');
for (i=0; i < n; i++)
document.write('<layer name="nsD'+i+'" top=0 left=0 bgcolor='+dCol+' clip="0,0,2,2"></layer>');
for (i=0; i < h; i++)
document.write('<layer name=nsH'+i+' top=0 left=0 bgcolor='+hCol+' clip="0,0,2,2"></layer>');
for (i=0; i < m; i++)
document.write('<layer name=nsM'+i+' top=0 left=0 bgcolor='+mCol+' clip="0,0,2,2"></layer>');
for (i=0; i < s; i++)
document.write('<layer name=nsS'+i+' top=0 left=0 bgcolor='+sCol+' clip="0,0,2,2"></layer>');
}
if (ie){
document.write('<div id="On" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < n; i++)
document.write('<div id="ieN" style="position:absolute;width:15px;height:15px;text-align:center">'+p+face[i]+'</font></div>');
document.write('</div></div>');
document.write('<div id="Od" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < n; i++)
document.write('<div id="ieD" style="position:absolute;height:2px;width:2px;font-size:2px;background:'+dCol+'"></div>');
document.write('</div></div>');
document.write('<div id="Oh" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < h; i++)
document.write('<div id="ieH" style="position:absolute;width:2px;height:2px;font-size:2px;background:'+hCol+'"></div>');
document.write('</div></div>');
document.write('<div id="Om" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < m; i++)
document.write('<div id="ieM" style="position:absolute;width:2px;height:2px;font-size:2px;background:'+mCol+'"></div>');
document.write('</div></div>')
document.write('<div id="Os" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < s; i++)
document.write('<div id="ieS" style="position:absolute;width:2px;height:2px;font-size:2px;background:'+sCol+'"></div>');
document.write('</div></div>')
}
 
(ns)?window.captureEvents(Event.MOUSEMOVE):0;
function Mouse(evnt){
ymouse = (ns)?evnt.pageY+ClockFromMouseY-(window.pageYOffset):event.y+ClockFromMouseY;
xmouse = (ns)?evnt.pageX+ClockFromMouseX:event.x+ClockFromMouseX;
}
(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;
 
function ClockAndAssign(){
time = new Date ();
secs = time.getSeconds();
sec = -1.57 + Math.PI * secs/30;
mins = time.getMinutes();
min = -1.57 + Math.PI * mins/30;
hr = time.getHours();
hrs = -1.575 + Math.PI * hr/6+Math.PI*parseInt(time.getMinutes())/360;
if (ie){
On.style.top=window.document.body.scrollTop;
Od.style.top=window.document.body.scrollTop;
Oh.style.top=window.document.body.scrollTop;
Om.style.top=window.document.body.scrollTop;
Os.style.top=window.document.body.scrollTop;
}
for (i=0; i < s; i++){
 var sd=(ns)?document.layers['nsS'+i]:ieS[i].style;
 sd.top=y[8+i]+HandY+(i*HandHeight)*Math.sin(sec)+scrll;
 sd.left=x[8+i]+HandX+(i*HandWidth)*Math.cos(sec);
}
for (i=0; i < m; i++){
 var md=(ns)?document.layers['nsM'+i]:ieM[i].style;
 md.top=y[4+i]+HandY+(i*HandHeight)*Math.sin(min)+scrll;
 md.left=x[4+i]+HandX+(i*HandWidth)*Math.cos(min);
}
for (i=0; i < h; i++){
 var hd=(ns)?document.layers['nsH'+i]:ieH[i].style;
 hd.top=y[1+i]+HandY+(i*HandHeight)*Math.sin(hrs)+scrll;
 hd.left=x[1+i]+HandX+(i*HandWidth)*Math.cos(hrs);
}
for (i=0; i < n; i++){
 var D=(ns)?document.layers['nsD'+i]:ieD[i].style;
 D.top=y[13+i] + ClockHeight*Math.sin(-1.0471 + i*e*Math.PI/180)+scrll;
 D.left=x[13+i] + ClockWidth*Math.cos(-1.0471 + i*e*Math.PI/180);
}
for (i=0; i < n; i++){
 var N=(ns)?document.layers['nsN'+i]:ieN[i].style;
 N.top=y[25+i]-6 + ClockHeight*1.4*Math.sin(-1.0471 + i*e*Math.PI/180)+scrll;
 N.left=x[25+i]-6 + ClockWidth*1.4*Math.cos(-1.0471 + i*e*Math.PI/180);
}
}
 
function Delay(){
scrll=(ns)?window.pageYOffset:0;
y[0]=Math.round(Y[0]+=((ymouse)-Y[0])*speed);
x[0]=Math.round(X[0]+=((xmouse)-X[0])*speed);
for (i=1; i < 37; i++){
y[i]=Math.round(Y[i]+=(y[i-1]-Y[i])*speed);
x[i]=Math.round(X[i]+=(x[i-1]-X[i])*speed);
}
ClockAndAssign();
setTimeout('Delay()',20);
}
if (ns||ie)window.onload=Delay;



