/*Marcos Paulo - 02/02/2009
 *Fun??o para contar o numero de caracteres no textarea
 **/
function counter_length(campo,e)
{

   var content;
   var content_len;
   var content_value;
   var display;
   var $;

   $=document;
   String(content_value);
   content=$.getElementById(campo).value;
   content_len=content.length;
   //o nome do <span> ser? a palavra display_ + o nome do campo que esta sendo contado;
   display='display_'+campo;


   if(content_len==null || content_len<0 || content_len==undefined)
   {
     $.getElementById(display).value='0';
     return true;
   }
   else
   {
      if(content_len== 256 || content_len> 255)
      {
          content_value=$.getElementById(display).style.backgroundColor='red';
          $.getElementById(campo).readOnly=true;
          alert('Voc? alcan?ou o numero m?ximo de caracters!');
          return false;
      }
      else
      {
        content_value=$.getElementById(display).innerHTML=''+content_len+'';
        return true;
      }
   }
}
