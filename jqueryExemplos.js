
$(document).ready(function(){
    $('#frmParametrosGlobal').find('#parGrade').change( function(){
        var vlValor = this.checked;
        $("#carregando").ajaxStart(function(){ $(this).show()})
                         .ajaxStop(function(){ $(this).hide()})
                         .ajaxComplete(function(){ $(this).hide()})
                         .ajaxError(function(){ $(this).hide()});
        $.post( "parametros.php", { parametro: "grade", valor: vlValor } );
    });
    $('body').click( function( e ){
        var vlObj = jQuery( e.target );
        var vlId = vlObj.attr('id');
        //vlObj.parent().get(0).tagName
        if ( $('#divParametrosGlobal').css('display') == 'block' )
        {
          if ( vlObj.parents('#divParametrosGlobal').attr('id') != 'divParametrosGlobal' )
          {
            if ( vlId != 'btnParametrosGlobal' && vlId != 'divParametrosGlobal' )
            {
                $('#btnParametrosGlobal').toggleSymbol();
                $('#divParametrosGlobal').slideUp( 200 );
            }
          }
        }
    });
    $('#btnParametrosGlobal').click( function(){
        $('#btnParametrosGlobal').toggleSymbol();
        $('#divParametrosGlobal').slideToggle( 200 );
    });
    $.fn.toggleSymbol = function()
    {
        var btnString = $(this).html();
        if ( btnString.match(/-/g) )
            btnString = btnString.replace('-', '+');
        else
            btnString = btnString.replace('+', '-');
        $(this).html( btnString );
    }
});



$.fn.fpCarrega = function(url){
    $html = '<div id="carregando"><img src="imagens/carregando.gif" alt="Carregando" title="Carregando" /></div>';
    $(this).html($html).load(url);
}



$.fn.fpCarregaModulos = function(url){
    $("#carregando").ajaxStart(function(){ $(this).show()})
                     .ajaxStop(function(){ $(this).hide()})
                     .ajaxComplete(function(){ $(this).hide()})
                     .ajaxError(function(){ $(this).hide()});

    //$("#quadroConteudoModulos").html($html);
    $(this).load(url);
}













