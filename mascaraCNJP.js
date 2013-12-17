

function fpMascaraCnpj(c){
    v = c.value;
    v=v.replace(/\D/g,"")                           //Remove tudo o que n?o ? d?gito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro d?gitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto d?gitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono d?gitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um h?fen depois do bloco de quatro d?gitos
    c.value = v;
    return v
}










