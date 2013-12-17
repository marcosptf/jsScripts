
/* classe estatica js */
var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();





/* outro exemplo de classe literal */
var me = {
	name:"jsname",
	age:29
}

console.log("my name is "+me.name+" and my age is "+me.age);



/* exemplo de classe construtora */
var me = new Object();
me.name="jsName";
me.age=21;
me.getDados = function(){
    return("nome =>"+this.name+" age=>"+this.age); 
}
console.log(me.getDados());





/* outro exemplo de classe construtora */
function Person(job, married) {
    this.job = job;
    this.married = married;
    //declaracao de metodo
    this.dados = function(){
    	return "jsDados";
    }
}

var gabby = new Person("student",true);
console.log(gabby.job+" - "+gabby.married);
gabby.dados();



/************************************************************************************************************/
function MyObject(attributeA, attributeB) {  
   this.attributeA = attributeA  
   this.attributeB = attributeB  
}  
   
// cria um Objeto chamado obj  
obj = new MyObject('red', 1000);  
   
// acessa um atributo do obj  
alert(obj.attributeA);  
   
// accessa um atributo com notação de array associativo   
alert(obj["attributeA"]);  
   
// adiciona um novo atributo  
obj.attributeC = new Date();  
   
// remove um atributo do obj  
delete obj.attributeB;  
   
// remove o Objeto inteiro  
delete obj; 

/************************************************************************************************************************
JavaScript Objects

Earlier in this tutorial we have seen that JavaScript has several built-in objects, like String, Date, Array, and more. In addition to these built-in objects, you can also create your own.

An object is just a special kind of data, with a collection of properties and methods.

Let's illustrate with an example: A person is an object. Properties are the values associated with the object. The persons' properties include name, height, weight, age, skin tone, eye color, etc. All persons have these properties, but the values of those properties will differ from person to person. Objects also have methods. Methods are the actions that can be performed on objects. The persons' methods could be eat(), sleep(), work(), play(), etc.
Properties

The syntax for accessing a property of an object is:
 objName.propName

You can add properties to an object by simply giving it a value. Assume that the personObj already exists - you can give it properties named firstname, lastname, age, and eyecolor as follows:
 personObj.firstname="John";
 personObj.lastname="Doe";
 personObj.age=30;
 personObj.eyecolor="blue";

 document.write(personObj.firstname);

The code above will generate the following output:
 John
Methods

An object can also contain methods.

You can call a method with the following syntax:
 objName.methodName()

Note: Parameters required for the method can be passed between the parentheses.

To call a method called sleep() for the personObj:
 personObj.sleep();

Creating Your Own Objects

There are different ways to create a new object:

1. Create a direct instance of an object

The following code creates a new instance of an object, and adds four properties to it:
 personObj=new Object();
 personObj.firstname="John";
 personObj.lastname="Doe";
 personObj.age=50;
 personObj.eyecolor="blue";

alternative syntax (using object literals):
 personObj={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};

Adding a method to the personObj is also simple. The following code adds a method called eat() to the personObj:
 personObj.eat=eat;

2. Create an object constructor

Create a function that construct objects:
 function person(firstname,lastname,age,eyecolor)
 {
 this.firstname=firstname;
 this.lastname=lastname;
 this.age=age;
 this.eyecolor=eyecolor;
 }

Inside the function you need to assign things to this.propertyName. The reason for all the "this" stuff is that you're going to have more than one person at a time (which person you're dealing with must be clear). That's what "this" is: the instance of the object at hand.

Once you have the object constructor, you can create new instances of the object, like this:
 var myFather=new person("John","Doe",50,"blue");
 var myMother=new person("Sally","Rally",48,"green");

You can also add some methods to the person object. This is also done inside the function:
 function person(firstname,lastname,age,eyecolor)
 {
 this.firstname=firstname;
 this.lastname=lastname;
 this.age=age;
 this.eyecolor=eyecolor;

 this.newlastname=newlastname;
 }

Note that methods are just functions attached to objects. Then we will have to write the newlastname() function:
 function newlastname(new_lastname)
 {
 this.lastname=new_lastname;
 }

The newlastname() function defines the person's new last name and assigns that to the person. JavaScript knows which person you're talking about by using "this.". So, now you can write: myMother.newlastname("Doe").


JavaScript Orientado a Objetos – Parte 1

O JavaScript, apesar de ser usado há muito tempo quase que exclusivamente como linguagem de programação estruturada, também é uma linguagem de programação orientada a objetos poderosa. Nessa série – remodelada – vou mostrar um pouco sobre o assunto.

Depois de muito tempo, resolvi editar essa série e repostá-la aqui. Aprendi um pouco mais sobre o assunto através da prática, corrigi alguns erros – muito criticados na época – e adicionei algumas informações que achei pertinentes. Como dá pra ver, o permalink continua o mesmo, e a versão antiga da série já não está mais no ar. Espero que as correções e adições possam esclarecer bem o assunto.
Alguns Conceitos

Antes de começarmos a colocar as mãos em código, vamos aprender um pouco de teoria. O JavaScript não é uma linguagem orientada a objetos completamente desenvolvida, e não implementa alguns conceitos nativamente, como herança e variáveis públicas e privadas, dependendo de “gambiarras” para sua implementação.

A base da programação orientada a objetos é, logicamente, objetos. Um objeto é uma abstração de algo real (uma mesa, um carro, a janela do navegador, um elemento HTML…). Esse objeto possui sua própria estrutura de dados, encapsulada em seu próprio escopo. Esses dados podem ser tipos primitivos (Strings, Arrays, Numbers, Booleans…), funções (as quais chamaremos de métodos, quando dentro dos objetos) e até outros objetos.

Para criarmos um objeto, precisamos da definição de sua estrutura de dados, criada através de uma matriz. Essa matriz é chamada de classe, ou construtor no JavaScript.

De começo creio que é o suficiente. Quando for necessário, explicarei outros conceitos, como encapsulamento, polimorfismo, herança…
Criando Construtores

Em nosso querido JavaScript, um construtor é apenas uma função comum, que é instanciada em uma variável. Essa instância se faz através da palavra-chave new, indicando a criação de um novo objeto.
function Person() {}
	var me = new Person();

A palavra-chave new, entretanto, só é necessária caso quando a função não retorna o objeto recém-criado. Para retorná-lo, usamos a palavra-chave this.
function Person() { return this; }
	var me = Person();

O this, apesar de estar no construtor, refere-se ao próprio objeto. Ele será bem usado mais a frente.
Definindo Propriedades

Propriedades, ou atributos, são os dados que ficam encapsulados no escopo do objeto. Como dito mais acima, essas propriedades podem ser tipos primitivos, funções ou outros objetos.

Seguindo a idéia de algo real, toda pessoa tem um nome. Vamos dar um nome à pessoa que “criamos”.
var me = new Person();
	me.name = "Julio Greff";

No código acima, definimos um nome apenas ao objeto me. Outros objetos criados a partir de Person não terão a mesma propriedade. Isso é útil em nosso caso, já que somente eu me chamo “Julio Greff”, e só você possui seu nome.

A mesma técnica não é tão útil quando precisamos definir uma propriedade para todos os objetos criados a partir de determinado construtor. Já pensou se tivéssemos, por exemplo, que definir o número de olhos para cada pessoa que criarmos? Para evitar retrabalho, definimos as propriedades comuns a todos objetos dentro do construtor.
function Person() {
		this.eyes = 2;
	}

No exemplo, usei this para me referir ao próprio objeto, ou seja, todo objeto criado terá a propriedade eyes igual a 2.

Mesmo definindo uma propriedade comum a todos objetos, podemos modificar alguma propriedade de um objeto em particular sem que os outros sejam afetados. Por exemplo, no caso de um cíclope, caolho ou alguma anomalia genética grave.
var me = new Person();
	var cyclop = new Person();
	cyclop.eyes = 1;
	alert(cyclop.eyes); // 1
	alert(me.eyes); // 2, inalterado

Como você deve ter notado – ou pelo menos devia – o acesso às propriedades é feito através do . (ponto), assim como é feita a sua definição.

Desde quando a humanidade é a humanidade, toda pessoa recebe um nome quando nasce. Também pode receber um apelido, uma roupa, ou qualquer outra coisa. Com os objetos acontece algo parecido. Na “concepção” de cada objeto, podemos passar parâmetros para a função construtora, assim como faríamos como outra função qualquer. Esses parâmetros podem, mais tarde, vir a se tornarem propriedades do objeto.
function Person(name) {
		this.name = name;
	}

Dessa maneira, quando criamos o objeto, já podemos dar um nome à pessoa, sem a necessidade de fazê-lo depois da criação do objeto.
Definindo Métodos

Assim como características (propriedades), pessoas também têm comportamento: andar, falar, comer… Objetos também têm comportamento, e esses comportamentos são chamados de métodos. Métodos nada mais são do que funções que são executadas no escopo de algum objeto.

Para criarmos métodos, procedemos da mesma forma com que criamos propriedades. Simples, rápido e indolor:
function Person() {
		this.speak = function(message) {
			alert(message);
		}
	}

Para executarmos métodos também procedemos da mesma forma com que acessamos propriedades, com a diferença de que estamos chamando uma função.
me.speak("Olá!"); // "Olá!"

Essa não é a única maneira de criar métodos, mas é a mais simples, mais organizada e mais eficiente. As outras formas usam propriedades apontando para uma função criada normalmente, dentro ou fora do objeto.




JavaScript Orientado a Objetos – Parte 2

O JavaScript, apesar de ser usado há muito tempo quase que exclusivamente como linguagem de programação estruturada, também é uma linguagem de programação orientada a objetos poderosa. Nessa segunda parte da série, vamos nos aprofundar um pouco mais nessa técnica de programação.
A Propriedade prototype

No JavaScript, toda função construtora possui uma propriedade chamada Function.prototype. Essa propriedade nos permite adicionar e, em certos casos modificar, propriedades ou métodos de um construtor, após sua definição. Diferente de PHP, por exemplo, podemos adicionar propriedades durante a execução.
function Person() {}
        var me = new Person();
        alert(me.eyes); // undefined
        Person.prototype.eyes = 2;
        alert(me.eyes); // 2

Como se pode notar, na primeira tentativa não tínhamos a propriedade definida. Após isso, adicionada em tempo de execução, já temos a propriedade definida.

Também há certas exceções na utilidade do Function.prototype. A primeira delas é que essa propriedade não consegue sobrescrever qualquer coisa que já tenha sido definida no construtor. Não podemos definir uma propriedade no construtor e depois mudar seu valor através de Function.prototype.
function Person() { this.eyes = 2; }
        var me = new Person();
        alert(me.eyes); // 2
        Person.prototype.eyes = 1;
        alert(me.eyes); // 2, continuo tendo 2 olhos

Para resolver esse problema e continuar usando Function.prototype, podemos definir a propriedade fora do construtor usando a técnica, e sobrescrevê-la da mesma maneira.
function Person() {}
        Person.prototype.eyes = 2;
        var me = new Person();
        alert(me.eyes); // 2
        Person.prototype.eyes = 1;
        alert(me.eyes); // 1

Outro pequeno problema é quando definimos objetos ou arrays através dessa propriedade. Veja:
function Person() {}
        Person.prototype.uses = ["watch", "glasses"];
        var me = new Person();
        var you = new Person();
        me.uses.push("hat");
        alert(me.uses); // ["watch", "glasses", "hat"]
        alert(you.uses); // ["watch", "glasses", "hat"]

Com base no exemplo, pode-se ver que o array é compartilhado, assim como todos os seus itens. Moral da história: é preferível definir tudo no próprio construtor, ou então definir apenas métodos através de Function.prototype.
Encapsulamento

Formalmente, encapsulamento ainda não existe no JavaScript, mas podemos usar esse recurso disfarçado.

Tudo o que criamos dentro de nossos construtores está no escopo público, ou seja, pode ser acessado de dentro do construtor ou do restante do script. Uma maneira de simular variáveis privadas, que só podem ser acessadas de dentro do construtor e por seus métodos, é utilizando o escopo local. Lembra-se de quando falei sobre escopo de variáveis?
function Person() {
                this.public = "Variável Pública";
                var private = "Variável Privada";
                this.publicMethod = function() {
                        alert(this.public);
                        alert(private);
                }
                var privateMethod = function() {
                        alert(private);
                }
                this.callPrivate = function() {
                        alert(private);
                }
        }
        var me = new Person();
        alert(me.public); // "Variável Pública";
        alert(me.private); // undefined
        me.publicMethod();
        me.privateMethod(); // Retornará erro
        me.callPrivate();

O exemplo acima exemplifica bem de onde cada tipo de variável pode ser acessado. Já o uso de variáveis protegidas (protected) necessitam de mais gambiarras, mas isso fica pra outra vez.

Quanto ao uso de métodos privados só existe um pequeno problema: não é possível acessar propriedades ou métodos públicos diretamente. Para isso, é necessário modificar o escopo em que a função executada, através de Function.bind (função user-defined).
function Person() {
                this.public = "Variável Pública";
                var bindPublic = function() {
                        alert(this.public);
                }.bind(this);
                bindPublic();
        }
        var me = new Person();

Para testar, lembre-se de copiar a função Function.bind!


JavaScript Orientado a Objetos – Parte 3

Volto com a terceira parte sobre JavaScript Orientado a Objetos. Então chega de papo e vamos logo ao que interessa.
Propriedades Estáticas

Propriedades e métodos estáticos são aqueles que podem ser acessados de qualquer lugar do script, sem a necessidade de instanciar a classe. Considera-se que o JavaScript não suporta esse conceito, já que não possui classes, mas pode-se também simular.

Funções não deixam de ser objetos, e objetos podem ter propriedades. Veja no exemplo:
function Person() {  }
        Person.staticMethod = function() { alert("Método Estático"); }
        Person.staticMethod(): // "Método Estático"
        var me = new Person();
        me.staticMethod(); // Retornará erro

Também muito simples, e bem útil em certas ocasiões. Podemos tomar como exemplo a Mootools, com o Class e Class.empty. Class é um construtor, e Class.empty é um método estático.
Herança

A herança é outro conceito que o JavaScript não implementa formalmente, necessitando das famosas gambiarras. Quando bem empregada, permite uma grande reutilização de código, criando classes derivadas a partir de uma superclasse (classe-mãe), herdando todas as propriedades.

Existem vários tipos específicos de pessoas, em vários sentidos. Brasileiros, portugueses, americanos, vendedores, médicos, desenvolvedores… Mesmo sendo mais específicos, todos eles têm características comuns de uma pessoa. Assim, o construtor Brazilian é derivado de Person.

Primeiro, vamos criar os construtores com suas propriedades.
function Person() {
                this.eyes = 2;
                this.speak = function(message) {
                        alert(message);
                }
        }
        function Brazilian() {
                this.birthCountry = "Brasil";
        }

Pessoas falam, e isso se aplica também aos brasileiros, mas nem todas as pessoas nasceram no Brasil. Assim, a superclasse (ou super-construtor) é Person, e somente nela definimos as propriedades comuns.

Para fazer a herança existem vários métodos, mas vou explicar agora somente o que considero o mais simples e usado. Basta criar uma instância do “super-construtor” no protótipo do construtor derivado, assim:
Brazilian.prototype = new Person;

Todo o construtor Person foi instanciado como parte de Brazilian. Agora podemos criar um objeto Brazilian e utilizar tanto as propriedades específicas (definidas no próprio construtor) quanto as do “super-construtor”.
var me = new Brazilian("Julio Greff");
        alert(me.birthCountry); // "Brasil"
        me.speak("Olá!"); // "Olá!"

Existem outros métodos para herança, mas como já disse ficarão para outra oportunidade. E a série sobre JavaScript Orientado a Objetos se encerra aqui! Qualquer correção ou sugestão será bem vinda, basta comentar! Até!




/***********************************************************************************************************************************************************************************/





























