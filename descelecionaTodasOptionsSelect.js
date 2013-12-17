
function removeAllOption(selectId){

        document.getElementById(selectId).options.length = 0;
}

function addOption(selectId,txt,val,sel){

    var objOption;

    if(val == sel){
          objOption = new Option(txt,val,"defaultSelected","selected");
    }else{
          objOption = new Option(txt,val);
    }

    document.getElementById(selectId).options.add(objOption);

}

