

//funç?o para validaç?o de cnpj
function Trat_cnpj(id_campo)
{

  var content;
  content=document.getElementById(id_campo).value;
  //alert(content.length);
  if(content.length == 14)
  {
      var a = new Array();
      var b = new Number;
      var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
      for (i=0; i<12; i++)
      {
        a[i] = content.charAt(i);
        b += a[i] * c[i+1];
      }
      if ((x = b % 11) < 2)
      {
        a[12] = 0;
      }
      else
      {
        a[12] = 11-x;
      }
      b = 0;
      for (y=0; y<13; y++)
      {
        b += (a[y] * c[y]);
      }
      if ((x = b % 11) < 2)
      {
        a[13] = 0;
      }
      else
      {
        a[13] = 11-x;
      }
      if ((content.charAt(12) != a[12]) || (content.charAt(13) != a[13]))
      {
          document.getElementById('erro_cnpj').style.display = "inline";
          //document.getElementById('cancela').style.display = "none";
          document.getElementById('submit').style.display = "none";
      }
      else
      {
          document.getElementById('erro_cnpj').style.display = "none";
          //document.getElementById('cancela').style.display = "inline";
          document.getElementById('submit').style.display = "inline";
      }
  }
  else
  {
      document.getElementById('erro_cnpj').style.display = "inline";
      //document.getElementById('cancela').style.display = "none";
      document.getElementById('submit').style.display = "none";
  }
}



