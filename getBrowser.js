

agent=navigator.userAgent.toLowerCase();
op=agent.indexOf('opera')!=-1;
version=parseInt(navigator.appVersion);
ns=(agent.indexOf('mozilla')!=-1)&&(agent.indexOf('spoofer')==-1)&&(agent.indexOf('compatible')==-1)&&(version>=4);
ns4=ns&&version==4;
ns50=ns&&version==5&&(parseInt(navigator.productSub)<20010726);
ns5=(ns&&version>=5)||op;
ie=agent.indexOf('msie')!=-1&&(version>=4);
ie4=ie&&(agent.indexOf('msie 4')!=-1);
ie5=ie&&((agent.indexOf('msie 5')!=-1)||(agent.indexOf('msie 5.5')!=-1)||(agent.indexOf('msie 6')!=-1)||(agent.indexOf('msie 7')!=-1)||(agent.indexOf('msie 8')!=-1));
mac=agent.indexOf('mac')!=-1;
if(ns4){
    visible="show";
    hidden="hide";
    CA_ns4dif=4;
}else{
    visible="visible";
    hidden="hidden";
    CA_ns4dif=0;
}
CA_lowres=(screen.width<800);
CA_hires=(screen.width>800);
CA_res=CA_lowres?0:CA_hires?2:1;
CA_link=ns?' href="javascript:':' onClick="';
CA_nulllink=ns?'href="javascript:void(0)"':'';
dynLayerArray=[];
function dynLayer(obj,parent){
    if(ie){
        ident = obj.parentElement.id;
        if(ident != "form1"){
            this.css=obj.style;
            this.doc=obj;
            this.parent=obj.parentElement.id?eval('dyn'+obj.parentElement.id):false;
        };
    }else if(ns4){
        obj.created=true;
        this.css=obj;
        this.doc=obj.document;
        this.parent=parent?eval('dyn'+parent.id):false;
    }else{
        obj.created=true;
        this.css=obj.style;
        this.doc=obj;
        this.parent=parent?eval('dyn'+parent.id):false;
        this.css.left=this.doc.offsetLeft-(this.parent?this.parent.doc.offsetLeft:0);
        this.css.top=this.doc.offsetTop-(this.parent?this.parent.doc.offsetTop:0);
    }
    dynLayerArray[j]=this;
    j++;
};
dynLayer.prototype.setWidth=function(w){
    w=w<0?0:w;
    if(ns4){
        this.css.clip.width=w;
    }else if(ns5){
        this.css.width=w;
    }else{
        this.css.pixelWidth=w;
    };
};
dynLayer.prototype.setHeight=function(h){
    h=h<0?0:h;
    if(ns4){
        this.css.clip.height=h;
    }else if(ns5){
        this.css.height=h;
    }else{
        this.css.pixelHeight=h;
    };
};
dynLayer.prototype.getWidth=function(){
    if(ns4){
        return this.css.clip.width;
    }else if(ie4){
        return this.css.pixelWidth;
    }else{
        return this.doc.offsetWidth;
    };
};
dynLayer.prototype.getHeight=function(){
    if(ns4){
        return this.css.clip.height;
    }else if(ie4){
        return this.css.pixelHeight;
    }else{
        return this.doc.offsetHeight;
    };
};
dynLayer.prototype.getContentWidth=function(){
    if(ns4){
        return this.doc.width;
    }else if(ns5){
        return this.doc.offsetWidth;
    }else{
        return this.doc.scrollWidth;
    };
};
dynLayer.prototype.getContentHeight=function(){
    if(ns4){
        return this.doc.height;
    }else if(ns5){
        return this.doc.offsetHeight;
    }else{
        return this.doc.scrollHeight;
    };
};
dynLayer.prototype.setSize=function(w,h){
    this.setWidth(w);
    this.setHeight(h);
};
dynLayer.prototype.setLeft=function(x){
    if(ns)this.css.left=x;
    else this.css.pixelLeft=x;
};
dynLayer.prototype.setTop=function(y){
    if(ns)this.css.top=y;
    else this.css.pixelTop=y;
};
dynLayer.prototype.getLeft=function(){
    if(ns4)return this.css.left;
    else if(ns5)return parseInt(this.css.left);
    else return this.doc.offsetLeft;
};
dynLayer.prototype.getTop=function(){
    if(ns4)return this.css.top;
    else if(ns5)return parseInt(this.css.top);
    else return this.doc.offsetTop;
};
dynLayer.prototype.getOffset=function(){
    X=this.getLeft();
    Y=this.getTop();
    getParentOffset(this);
    this.offsetX=X;
    this.offsetY=Y;
};
dynLayer.prototype.moveTo=function(x,y){
    this.setLeft(x);
    this.setTop(y);
    document.getElementById('brOnLayer').style.left = x + 'px';
    document.getElementById('brOnLayer').style.top = y + 'px';
};
dynLayer.prototype.moveBy=function(dx,dy){
    this.setLeft(this.getLeft()+dx);
    this.setTop(this.getTop()+dy);
};
dynLayer.prototype.show=function(){
    this.css.visibility=visible;
};
dynLayer.prototype.hide=function(){
    this.css.visibility=hidden;
};
function getParentVisibility(obj){
    if(obj.parent){
        parentVisibility=obj.parent.css.visibility!=hidden;
        getParentVisibility(obj.parent);
    }else{
        parentVisibility=true;
    };
};
dynLayer.prototype.getVisibility=function(){
    visibility=this.css.visibility!=hidden;
    getParentVisibility(this);
    return visibility&&parentVisibility;
};
dynLayer.prototype.setLayer=function(x,y,t,r,b,l){
    this.moveTo(x,y);
    if(ns4){
        this.css.clip.top=t;
        this.css.clip.right=r;
        this.css.clip.bottom=b;
        this.css.clip.left=l;
    }else{
        this.css.clip='rect('+t+'px '+r+'px '+b+'px '+l+'px)';
    };
    this.show();
    this.setSize(r-l,b-t);
};
dynLayer.prototype.resetLayer=function(){
    this.hide();
};
dynLayer.prototype.setHTML=function(html){
    if(ns4){
        this.doc.write(html);
        this.doc.close();
    }else
        this.doc.innerHTML=html;
};
function getParentOffset(obj){
    if(obj.parent){
        X+=obj.parent.getLeft();
        Y+=obj.parent.getTop();
        getParentOffset(obj.parent);
    };
};
function swapImg(dynLayer,imgName,imgSrc){
    if(ns4)eval((dynLayer?dynLayer+'.doc':'document')+'[\''+imgName+'\'].src='+imgSrc+'.src');
    else document[imgName].src=eval(imgSrc+'.src');
};
function getFormObj(dynLayer,formName,formField){
    if(ns4){
        return eval((dynLayer?dynLayer+'.doc.':'document.')+formName+(formField?'.'+formField:''));
    }else{
        return eval('document.'+formName+(formField?'.'+formField:''));
    };
};
function getAvailableWidth(){
    if(ns || op){
        return window.innerWidth;
    }else{
        return document.body.clientWidth;
    };
};
function getAvailableHeight(){
    if(ns || op){
        return window.innerHeight;
    }else{
        return document.body.clientHeight;
    };
};
function getDocumentWidth(){
    if(ns){
        return document.width;
    }else{
        return document.body.scrollWidth;
    };
};
function getDocumentHeight(){
    if(ns){
        return document.height;
    }else{
        return document.body.scrollHeight;
    };
};
function initializeLayers(){
    j=0;
    if(ie4){
        for(var i=0;i<document.all.tags('div').length;i++){
            obj=document.all.tags('div')[i];
            if(obj.id!='')eval('dyn'+obj.id+'=new dynLayer(obj)');
        };
    };
    if(ie5){
        document.oncontextmenu=returnFalse;
        for(var i=0;i<document.getElementsByTagName('div').length;i++){
            obj=document.getElementsByTagName('div')[i];
            if(obj.id!='')eval('dyn'+obj.id+'=new dynLayer(obj)');
        };
    };
    if(ns4){
        for(var i=0;i<document.layers.length;i++)extractNS4Layers(document.layers[i]);
    };
    if(ns5){
        for(var i=0;i<document.getElementsByTagName('div').length;i++){
            extractNS5Layers(document.getElementsByTagName('div')[i]);
        };
    };
    setupInitialValues();
};
function extractNS4Layers(obj,parent){
    if(obj.name!=''){
        if(!obj.created)eval('dyn'+obj.name+'=new dynLayer(obj,parent)');
        for(var i=0;i<obj.document.layers.length;i++){
            extractNS4Layers(obj.document.layers[i],obj);
        };
    };
};
function extractNS5Layers(obj,parent){
    if(obj.id!=''){
        if(!obj.created)eval('dyn'+obj.id+'=new dynLayer(obj,parent)');
        for(var i=0;i<obj.getElementsByTagName('div').length;i++){
            extractNS5Layers(obj.getElementsByTagName('div')[i],obj);
        };
    };
};
function preLoad(){
    for(i in imageFiles){
        if(i==0){
            imagePath=imageFiles[i];
        }else{
            imageName=imageFiles[i].substring(0,imageFiles[i].indexOf('.'));
            eval(imageName+'=new Image();'+imageName+'.src="'+imagePath+imageFiles[i]+'"');
        };
    };
};
if(ns){
    origWidth=innerWidth;
    origHeight=innerHeight;
};
function reloadPage(){
    if(ns4 && origWidth == innerWidth && origHeight == innerHeight){
        return;
    };
    if(ie || ns5){
        setTimeout('window.location.reload()',1000);
    }else{
        window.location.reload();
    };
};
function noFocus(obj){
    if(!ns5){
        if(obj.blur())obj.blur();
    };
};
function msgStatus(msg){
    status=msg;
    return true;
};
function returnFalse(){
    return false;
};
function event_Cancel(evt){
    var ctrl=ns4?evt.modifiers&Event.CONTROL_MASK:(ns5?evt.ctrlKey:window.event.ctrlKey);
    var shift=ns4?evt.modifiers&Event.SHIFT_MASK:(ns5?evt.shiftKey:window.event.shiftKey);
    if(ie){
        if(ie4&&event.button==2){
            top.window.blur();
            setTimeout('top.window.focus()',500);
        };
    };
    if((ns&&evt.which==3)||((ctrl||shift)&&(evt.target.type!='text')))return returnFalse();
};
alert_print='O seu browser é o Internet Explorer v4. Esta versão não suporta a rotina de impressão deste site.';
propertiesNames=new Array('toolbar','location','directories','status','menubar','scrollbars','resizable','top','left','width','height');
function abrejanela(){
    var arg=abrejanela.arguments;
    var properties;
    var url=arg[0];
    if(ie){
        popWidth=screen.availWidth;
        popHeight=screen.availHeight;
    };
    if(ns){
        popWidth=screen.availWidth-(window.outerWidth-window.innerWidth);
        popHeight=screen.availHeight-(window.outerHeight-window.innerHeight);
    };
    switch(arg[1]){
        case '1':
            properties='1,1,1,1,1,1,1,0,0,550,'+(ns?'250':'400');
            break;
        case '2':
            properties='1,0,0,1,0,1,1,0,0,'+(popWidth-(ns?0:10))+','+(popHeight-(ns?-55:95));
            break;
        case '3':
            properties='1,1,1,1,1,1,1,0,0,'+popWidth+','+popHeight;
            break;
        case '4':
            properties='1,1,1,1,1,1,1,20,20,550,'+(ns?'250':'400');
            break;
        default:
            properties='0,0,0,0,0,0,0,0,0,550,400';
            break
    };
    var propertiesValues=properties.split(',');
    var winproperties='';
    for(var i=0;i<11;i++){
        winproperties+=propertiesNames[i]+'='+propertiesValues[i]+(i<10?',':'');
    };
    newWindow=window.open(url,'',winproperties);
};




