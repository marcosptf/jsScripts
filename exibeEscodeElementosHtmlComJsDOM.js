/*
lterar Vecto ? Campo data e justificativa
Protestar T?tulo ? Justificativa
Sustar T?tulo ? Justificativa
Abatimento ? Campo valor e Justificativa
-->
*/
function ExibeCampos(jsp)
{
    var id;
    var Vetor;


    if((jsp==null) || (jsp==''))
    {
        id=(((document.getElementById('TipoInstrucao').value)==null) ? (0) : (document.getElementById('TipoInstrucao').value));
    }


    //ModuloInstrucoes
    if(id==2 || jsp==0)
    {
      document.getElementById('AlteraVencimento').style.display='block';
      document.getElementById('Abatimento').style.display='none';
      document.getElementById('CampoJustificativa').style.display='none';
      document.getElementById('Justificativa2').value ='';
    }
    //ModuloInstrucoes
    else if((id==1) || (id==3))
    {
      document.getElementById('AlteraVencimento').style.display='none';
      document.getElementById('Abatimento').style.display='none';
      document.getElementById('CampoJustificativa').style.display='block';
      document.getElementById('Justificativa3').value ='';
    }
    //ModuloInstrucoes
    else if(id==4)
    {
      document.getElementById('AlteraVencimento').style.display='none';
      document.getElementById('Abatimento').style.display='block';
      document.getElementById('CampoJustificativa').style.display='none';
      document.getElementById('Justificativa4').value ='';
    }
    //ModuloBaixaManual
    else if(jsp==4)
    {
      document.getElementById('Processar').disabled='';
      document.getElementById('exec').disabled='';
      document.getElementById('RespConfirm').style.display='none';
      $('#divModal').jqmHide();
    }
    //ModuloBaixaManual
    else if(jsp==5)
    {
      //document.getElementById('Processar').disabled='disabled';
      //document.getElementById('exec').disabled='disabled';
    }
    //ModuloBaixaManual
    else if(jsp==6)
    {
      $('#divModal').load('ConfirmaBaixa.php',
       { Valor: jsp },
       function(data){
         $('#divModal').jqm().jqmShow();
       });
    }
    //ModuloInstrucoes
    else if(jsp==7)
    {
      document.getElementById('DataAlteraVencimento').disabled='disabled';
      document.getElementById('DataIncrementaValor').disabled='';
    }
    //ModuloInstrucoes
    else if(jsp==8)
    {
      document.getElementById('DataAlteraVencimento').disabled='';
      document.getElementById('DataIncrementaValor').disabled='disabled';
    }
    //ModuloInstrucoes
    else if(jsp==9)
    {
      document.getElementById('Processar').disabled='';
      document.getElementById('exec').disabled='';
      document.getElementById('RespConfirm').style.display='none';
      $('#divModal').jqmHide();
    }
    //ModuloInstrucoes
    else if(jsp==10)
    {
      $('#divModal').load('confirma.instrucao.lote.php',
       { Valor: jsp },
       function(data){
         $('#divModal').jqm().jqmShow();
       });
    }
    //modulo instrucao lote
    else if(11)
    {
      $('#divModal').load('titulos.posicao.carteira.php',
       {Valor:jsp},
       function(data){
         $('#divModal').jqm().jqmShow();
       });
    }
}

