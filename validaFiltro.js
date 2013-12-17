
function ValidaFiltro()
{
    var CampoNome;
    var CampoCnpj;
    var CampoLote;
    var CampoDocumento;
    var CampoDataOut;
    var CampoDataIn;
    var CampoSolicitaBaixa;
    var $=document;

    CampoNome           = $.getElementById('mNome').value;
    CampoDataIn         = $.getElementById('mData_vcto_ini').value;
    CampoDataOut        = $.getElementById('mData_vcto_fim').value;
    CampoCnpj           = $.getElementById('mCPF').value;
    CampoLote           = $.getElementById('mLote').value;
    CampoDocumento      = $.getElementById('mSDocumento').value;
    try{CampoSolicitaBaixa  = ((($.getElementById('SolicitaBaixa').value)=='') || (($.getElementById('SolicitaBaixa').value)==null) || (($.getElementById('SolicitaBaixa').value)==undefined) || (($.getElementById('SolicitaBaixa').value)==false) ? (0) : ($.getElementById('SolicitaBaixa').value));}catch(e){CampoSolicitaBaixa=0;}

   // if((CampoNome.length>=4) || (CampoCnpj.length>5) || (CampoLote.length>=5) || (CampoDocumento.length>=4) || (CampoDataIn.length==10) || (CampoDataOut.length==10))
   // {
        SolicitaBaixa=((CampoSolicitaBaixa==1)?(CampoSolicitaBaixa):(0));
        xajax_Grade_Titulos(xajax.getFormValues('form'),1,1,'Asc',SolicitaBaixa);
   /* }
    else
    {
        alert('favor selecione ao menos um valor para realizar o filtro!');
    }*/

}

