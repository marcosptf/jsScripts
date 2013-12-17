
Programação orientada a aspecto

programação de computadores que permite aos desenvolvedores de software separar e organizar o código de acordo com a sua importância para a aplicação (separation of concerns). Todo programa escrito no paradigma orientado a objetos possui código que é alheio a implementação do comportamento do objeto. Este código é todo aquele utilizado para implementar funcionalidades secundárias e que encontra-se espalhado por toda a aplicação (crosscutting concern). A POA permite que esse código seja encapsulado e modularizado.

 O conceito foi criado por Gregor Kiczales e a sua equipe na Xerox PARC, a divisão de pesquisa da Xerox. Eles desenvolveram o AspectJ, a primeira e mais popular linguagem POA.

 Os paradigmas de programação mais antigos, como a programação procedural e programação orientada a objeto, implementam a separação do código, através de entidades únicas. Por exemplo, a funcionalidade de log de dados, numa linguagem orientada a objetos, é implementada em uma única classe, que é referenciada em todos os pontos onde é necessário fazer log de dados. Como praticamente todo método necessita que alguns dados sejam registrados em log, as chamadas a essa classe são espalhadas por toda a aplicação.

 Tipicamente uma implementação da POA busca encapsular essas chamadas através de uma nova construção chamada de "aspecto". Um aspecto pode alterar o comportamento de um código (a parte do programa não orientada a aspecto) pela aplicação de comportamento adicional, advice, sobre um "ponto de execução", ou join point. A descrição lógica de um conjunto de join points é chamada de pointcut.

 Em muitas linguagens POA, a execução de um método e referências a atributos são exemplos de join points. Um pointcut consiste, por exemplo, de todas as referências a um conjunto de atributos.

 Motivação e conceitos básicos

 A programação orientada a aspecto tem como objetivo a separação do código segundo a sua importância para a aplicação, permitindo que o programador encapsule o código secundário em módulos separados do restante da aplicação.

 Por exemplo, considere uma aplicação bancária escrita em Java que possui um método que simplesmente transfere um valor de uma conta para outra:

void transferir(Conta origem, Conta destino, int valor) {
  if (origem.getSaldo() < valor) {
    throw new SaldoInsuficienteException();
  }
  origem.debitar(valor);
  destino.creditar(valor);
}

 Porém, numa aplicação bancária construída para o mundo real, este método de transferência está longe do adequado. É necessário incluir verificações de segurança, que determinam se o usuário possui autorização para realizar a operação. É preciso também "envolver" a operação em uma transação para previnir perda de dados. Finalmente, é preciso fazer o log dos dados da aplicação. Uma versão simplificada que contém estes novos objetivos (concerns) é mostrada abaixo:

void transferir(Conta origem, Conta destino, int valor) {
  if (!getUsuarioCorrente().temPermissao(OP_TRANSFERENCIA)) {
    throw new PermissaoException();
  }

  if (valor < 0) {
    throw new TransferenciaNegativaException();
  }
  if (origem.getSaldo() < valor) {
    throw new SaldoInsuficienteException();
  }
   
  Transaction tx = database.newTransaction();

  try {
    origem.debitar(valor);
    destino.creditar(valor);
    tx.commit();
    logger.logOperation(OP_TRANSFERENCIA, origem, destino, valor);
  }
  catch(Exception e) {
    tx.rollback();
  }
}

 Comparando com a primeira versão, o código perdeu a sua elegância e simplicidade, depois que o código voltado para outros objetivos foi "misturado" com aquele que implementa as regras do negócio. As transações, segurança, log de dados, etc. são exemplos de código chamado de crosscutting concerns.

 Também deve-se considerar o que ocorre quando é necessário alterar, por exemplo, a implementação de segurança da aplicação. No exemplo, mostrado o código é espalhado por vários métodos, e qualquer mudança significa um grande esforço de codificação.

 Também pode-se dizer que esse código não está devidamente encapsulado nos seus próprios módulos. Isto aumenta a complexidade do sistema e torna a manutenção do mesmo muito mais difícil.

 A POA busca resolver esse problema permitindo que o programador implemente essas questões (segurança, log, transações, e etc) através de aspectos. Em muitas linguagens POA, o aspecto é constituído de uma ou mais peças de advices (fragmentos de código, como métodos) e uma lista de join points (pontos no programa principal na qual os advices são inseridos). Por exemplo, um módulo de segurança pode incluir um advice que faz uma verificação de segurança, com instruções para inserir este fragmento de código no início dos métodos a(), b() e c() de algumas classes. Alguns mecanismos poderosos são utilizados, para que o desenvolvedor não precise definir os "pontos de inserção" manualmente. Estes mecanismos são conhecidos como linguagens de especificação de pointcuts.

 Modelos de join point

 Fundamentalmente, o modo como o aspecto interage com o programa é definido como modelo de join point (join point model, ou JPM) no qual o aspecto é escrito. Este modelo define três coisas:

Onde o aspecto pode ser aplicado. Os chamados join points;
Um modo para especificar, ou quantificar, múltiplos join points, os chamados pointcuts. Os pointcuts são na verdade uma consulta sobre todos os join points de um programa para selecionar um conjunto menor deles;
Um meio para alterar o comportamento dos join points. Em AspectJ, este meio é chamado de advice.


 O AspectJ tem dois JPMs: pointcuts e advice, e declarações inter-tipo. Outras linguagens orientadas a aspecto tem JPMs diferentes.

 Os pointcuts e advices no AspectJ

Os join points são pontos bem definidos ao longo da execução do programa. Incluem: execução de métodos, criação de objetos e lançamento de exceções. Notar que esses join points são dinâmicos, e portanto, só podem ser descobertos em tempo de execução. Por esta razão, os pointcuts e advices do AspectJ são conhecidos como um modelo de join points dinâmico;
pointcuts são especificados por uma consulta sobre o programa. Um exemplo de pointcut:


 pointcut set() : execution(* *.set*(..) ) && this(Point);

 Este pointcut define todos os join points correspondentes à "execução" de qualquer método cujo nome é iniciado com set de um objeto cujo tipo é Point.

advice é definido de maneira similar ao método. Porém, o advice nunca é invocado explicitamente. Ele é invocado somente quando um pointcut ligado a ele tem resultado igual a true (verdadeiro).


 after() : set() {
   Display.update();
 }

 O significado deste trecho de código é: após set() resultar em true execute o comando dentro do advice.

 Declarações inter-tipos no AspectJ

 O segundo JPM no AspectJ é conhecido como declaração inter-tipo. É um mecanismo que permite que um aspecto adicione outras declarações numa classe ou objeto existente. Este conceito é conhecido como "classes abertas". Um exemplo de declaração inter-tipo:

 aspect VisitAspect {
   Point.acceptVisitor(Visitor v) {
     v.visit(this);
   }
 }

 Este trecho de código adiciona o método acceptVisitor na classe Point.

Os join points são todos de tipos não anônimos;
Os pointcuts são nomes de classes ou interfaces;
Um meio de provocar alguma mudança nos pointcuts é adicionar uma declaração de corpo no tipo.


 A inserção dos advices

 A inserção, é a inclusão dos advices do aspecto nos join points especificados.

 Na introdução original da POA, Kiczales e sua equipe listaram as seguintes possibilidades para essa inserção:

Um pré-processador do código fonte (similar as implementações originais do C++);
Um pós-processador que incluiria patches em arquivos binários;
Um compilador que suportasse a POA e gerasse arquivos binários com os advices inseridos;
Em tempo de carregamento (no caso do Java, os advices seriam inseridos assim que as classes fossem carregadas na máquina virtual (JVM);
Em tempo de execução (detectar cada join point em tempo de execução e executar todos os advices relevantes).


 As primeiras duas opções dificultam o processo de desenvolvimento, enquanto as duas últimas causam impacto no desempenho do programa. Além disso a última requer um ambiente especial para execução. No mundo Java, implicaria no uso de uma JVM especial ou de algum framework de suporte.

 O AspectJ utiliza um compilador dedicado como solução. O compilador gera código Java padrão em arquivos binários de classe, que qualquer JVM padrão pode executar. A inserção em tempo de carregamento será adicionada numa próxima versão como resultado da fusão do AspectJ e do AspectWerkz.

 Todas as opções de inserção, exceto a última, implicam na mudança do código em algum ponto. O código gerado pelo compilador para uma dada classe Java (após o processamento e/ou carregamento) não é igual aquele que um compilador padrão Java geraria, já que ele não contém porções de código de advice. Muitos vêem isto como um problema da POA, devido ao fato disto dificultar o entendimento do modelo de execução do programa por parte do programador e dificultar a utilização de ferramentas de depuração (ver "Problemas" abaixo).

 Cohen e Gil produziram uma nova alternativa: eles apresentaram a noção de "inserção em tempo de instalação" (deploy-time weaving). Basicamente é um pós-processador, mas ao invés de aplicar patches ao código gerado, ele sugere a criação de sub classes das classes existentes, fazendo com que as modificações sejam inseridas através de métodos redefinidos. As classes originais permanecem intocadas, mesmo em tempo de execução; e todas as ferramentas (depuradores, etc) podem ser utilizadas durante o desenvolvimento. Uma abordagem similar foi implementada em alguns servidores de aplicação, como o WebSphere da IBM.

 AspectJ: uma linguagem POA

 O AspectJ é uma extensão orientada a aspecto para a linguagem de programação Java.

 POA e outros paradigmas de programação

 A programação orientada a aspecto difere muito do conceito da programação orientada a objeto e tem funcionalidade similar aos protocolos de meta-objeto. Os aspectos são próximos de conceitos de programação como subjects, mixins e delegação. Outros modos de se utilizar a programação orientada a aspecto incluem: composition filters e abordagem por hyperslices.

 Do ponto de vista matemático, os aspectos formam uma extensão de lógica de segunda ordem para qualquer paradigma de programação: enquanto paradigmas usuais levam a um raciocínio baseado em funções, mensagens e assim por diante, através de uma assinatura função/mensagem, a POA possibilita um raciocínio baseado em conjuntos destas entidades utilizando pointcuts com um caracter de substituição (wildcard) na sua assinatura. Portanto, pode-se enxergar a POA mais como uma extensão lógica poderosa, do que como um paradigma de programação. Esta visão foi proposta por Friedrich Steimann, por exemplo.

 Porém os defensores da POA a promovem como um pacote externo que pode ser entregue junto com a aplicação. Por exemplo, se um programa por si não tem suporte à segurança, um pacote POA pode servir como uma extensão modular para a aplicação, disponibilizando a segurança.

 Problemas da POA

 A depuração é um dos maiores problemas. Enquanto no nível sintático o código POA aparece em separado, ele está junto do restante do código em tempo de execução. A inserção de advices pode se tornar imprevisível se não ficar definido que aspecto deve dominar. Os projetistas devem considerar meios alternativos para conseguir a separação do código, como os tipos parciais do C#. Porém, estas abordagens não tem um mecanismo de quantificação que permite que o programador chegue a diversos join points com apenas uma declaração.

 Outro problema com a POA é a captura não intencional de join points através dos wildcards. Por exemplo, suponha que seja especificado um determinado pointcut com um advice associado, e um wildcard para todos os métodos que tenham certo padrão de nomenclatura. Um programador desavisado pode criar um método cujo nome seja compatível com esse wildcard, sem que seja essa a sua intenção, levando à execução inadvertida do advice. Da mesma forma, ao renomear um método, pode-se alterar completamente a sua semântica. Todos os programadores tem que conhecer o padrão escolhido para a nomenclatura dos métodos para que problemas sejam evitados? Uma ferramenta de desenvolvimento poderia criar condições para deixar os advices mais visíveis, mas essa questão ainda permanece em aberto.














