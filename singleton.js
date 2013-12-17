
//modelo de classe singleton js

(function()
{
    var instance = null;
    Teste = function()
    {
        if (instance != null)
            return instance;

        var maluco = null;
        this.setMaluco = function(valor)
        {
            maluco = valor;
        };

        this.getMaluco = function()
        {
            return maluco;
        };

        instance = this;
    };
})();




