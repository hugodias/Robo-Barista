module.exports = {

  setRobotName: function (robotName) {
    this.robotName = robotName;
  },

  getRobotName: function () {
    return this.robotName;
  },

  setUsername: function (username) {
    this.username = username;
  },

  getUsername: function () {
    return this.username;
  },

  theories: function () {
    return {
            // Qual a idade do robo
            "((.*)?(você|voce|sua)(.*)?(idade|anos)(.*)?)": {
              response: "Tenho 946485 anos, voce?",
              image: "http://placehold.it/500x500"
            },
            // Qual o nome do robo
            "(((.*)?seu(.*)?nome)|((.*)?(você|voce)(.*)?chama)|((.*)?(quem é você|e você|é você)(.*)?))": {
              response: "Meu nome é " + this.getRobotName() + ",respondo perguntas sobre café, e o seu?",
              image: null
            },
            // Comprimentos
            "oi|ola|tudo bem|como vai|blz|joia|sussa|que que pega|e ai": {
              response: "Oi " + this.getUsername() + " tudo bem?",
              image: null
            },
            // Conceito de cafe expresso
            "((.*)?(o que|significa|o quê|o que|é|significado|defina|definição|fazer)(.*)?(café expresso|expresso|espresso)(.*)?)": {
              response: "<p>Um café expresso (do italiano caffè espresso), frequentemente referido simplesmente como expresso (ou ainda internacionalmente espresso), é um método de preparar café através da passagem de água quente (não fervente) sob alta pressão pelo café moído. O café expresso tradicional, em máquina industrial, é feito sob pressão de novecentos a mil quilopascais (nove a dez atmosferas ou bars), o que explica o termo expresso que aqui tem o sentido de exprimir ou espremer, ao contrário do que muitos pensam não tem originalmente o significado de rápido (este é apenas uma coincidência da automatização), portanto em uma tradução mais contextual o seu nome poderia ser café espremido e por isto muitos preferem manter o original em Italiano usando o termo espresso ou café espresso.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Espresso_01.jpg/300px-Espresso_01.jpg"
            },
            // Sobre cafe torrado
            "((.*)?(café|cafe)(.*)?(torrado|triagem|calibragem|torra)(.*)?)": {
              response: "<p>O café, para seu consumo, necessita obrigatoriamente ser torrado. Antes de torrados, os grãos são selecionados, passam por triagem e calibragem. O processo de torra consiste em submeter o grão à elevação progressiva e rápida da temperatura, fazendo com que sua umidade interna chegue a 3%. Durante o processo, os grãos são mexidos continuamente para que a torra seja uniforme. Esta fase é determinante na característica final da bebida, pois o grau de torra evidencia e/ou esconde muitas propriedades do grão.</p><p>Para cada cliente ou mercado consumidor, para cada tipo de café (variedade e preparo) há um grau de torra diferente. Esta é a marca registrada de cada empresa e seus diferentes produtos. Depois de torrado o café precisa passar por um processo de desgaseificação e, depois deste descanso, ele será moído ou apenas embalado (café em grãos) dependendo do tipo de utilização a que se destina.</p>",
              image: "http://www.abic.com.br/publique/cgi/cgilua.exe/plugins/system/br.com.fabricadigital.publique.arearestrita/media.lua?f=CONS_curiosidades_cafetorrado.jpg"
            },
            // Conceito
            "((.*)(o que é|oq é|o que|o quê|significa|o que|significado)(.*)(café|cafe)(.*))": {
              response: "<p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação</p><p>Em alguns períodos da década de 1980, o café era a segunda mercadoria mais negociada no mundo por valor monetário, atrás apenas do petróleo.2 Este dado estatístico ainda é amplamente citado, mas tem sido impreciso por cerca de duas décadas, devido à queda do preço do café durante a crise do produto na década de 1990, reduzindo o valor total de suas exportações. Em 2003, o café foi o sétimo produto agrícola de exportação mais importante em termos de valor, atrás de culturas como trigo, milho e soja.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/200px-Roasted_coffee_beans.jpg"
            },
            // Quanto custa cafe
            "((.*)?(quanto custa|custa|valor)(.*)?(café|cafe)(.*)?)": {
              response: "<p>Para ninguém tomar um susto na hora da conta, pesquisamos o preço do expresso em dez cafeterias. O resultado é surpreendente: a versão mais cara, do Octavio Café , custa R$ 6,92, quase o dobro do cafezinho no Café Raiz , vendido por R$ 3,50, mesmo preço do Café Martinelli Midi.</p>",
              image: "http://vejasp.abril.com.br/blogs/delicia-de-conta/files/2014/06/caferaiz.jpeg"
            },
            // Tipos / espécies de café
            "((.*)?(tipos|espécies|especies|especie|espécie|planta|arábica|arabica|robusta|conilon)(.*)?(café|cafe)(.*)?)": {
              response: "<p>Existem dois tipos de planta de café: Arábica e Robusta (Conilon). Os 'melhores' cafés são do tipo Arábica, possuem aroma e doçura intensos com muitas variações de acidez, corpo e sabor. Os cafés especiais e gourmet são 100% Arábica. O Arábica tem 50% menos cafeína que o Robusta.</p><p>Existem muitas variedades da planta de café Arábica. As mais comuns nas melhores regiões produtoras brasileiras são: Bourbon, Catuaí, Acaiá e Mundo Novo. E, dentre essas variedades, existem também várias subvariedades: Bourbon Amarelo e Vermelho, Catuaí Amarelo e Vermelho, variedades de Mundo Novo, etc. Abaixo as características de algumas das principais variedades.</p>",
              image: "http://www.clubecafe.net.br/media/wysiwyg/tipos_de_caf_.png"
            },
            // Blends
            "((.*)?(blend|blends)(.*)?)": {
              response: "<p>Blends de Café Gourmet. Cada variedade da planta do café arábica possui atributos específicos de aroma, corpo, acidez e doçura. As combinações, ou Blends, são desenvolvidas para balancear ou acentuar as melhores qualidades de cada variedade de café arábica.</p>",
              image: "http://www.clubecafe.net.br/media/wysiwyg/tipos_de_caf_.png"
            },
            "((.*)?(país|pais|quem)(.*)?(produz|produtor|produção)(.*)?(café|cafe)(.*)?(mundo)?)": {
              response: "O maior produtor mundial de café é o Brasil. Em 2004 o país foi resposável por 35% da produção mundial de café, correspondente a 2356 milhões de toneladas",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Carte_Coffea_robusta_arabic.svg/400px-Carte_Coffea_robusta_arabic.svg.png"
            },
            // Onde tem cafe, local
            "((.*)(estado|cidade|local|onde tem|produtor|produzido|fazenda|mineiro|minas gerais|brasil)(.*)(café|cafe)(.*))": {
              response: "<p>Minas Gerais é o estado com maior produção de café do Brasil (26,6 milhões de sacas),5 o que corresponde a mais de 50% da produção nacional do produto e 17% da produção mundial. Patrocínio é o maior produtor do país com mais de 10% da produção do Triângulo Mineiro.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coffee_Plantation.jpg/400px-Coffee_Plantation.jpg"
            },
            // Sobre cafe, historia do cafe, onde surgiu cafe, de onde vem o cafe
            "((.*)(história|historia|sobre|origem|surgiu|de onde vem|onde nasceu|quem criou)(.*)(café|cafe)(.*))": {
              response: "<p>A história do café começou no século IX. O café é originário das terras altas da Etiópia (possivelmente com culturas no Sudão e Quênia) e difundiu-se para o mundo através do Egito e da Europa.6 Mas, ao contrário do que se acredita, a palavra 'café' não é originária de Kaffa — local de origem da planta —, e sim da palavra árabe qahwa, que significa 'vinho'(قهوة), devido à importância que a planta passou a ter para o mundo árabe.7</p><p>Uma lenda conta que um pastor chamado Kaldi observou que seus carneiros ficavam mais espertos ao comer as folhas e frutos do cafeeiro. Ele experimentou os frutos e sentiu maior vivacidade. Um monge da região, informado sobre o fato, começou a utilizar uma infusão de frutos para resistir ao sono enquanto orava.8</p><p>Parece que as tribos africanas, que conheciam o café desde a Antiguidade, moíam seus grãos e faziam uma pasta utilizada para alimentar os animais e aumentar as forças dos guerreiros. Seu cultivo se estendeu primeiro na Arábia, introduzido provavelmente por prisioneiros de guerra, onde se popularizou aproveitando a lei seca por parte do Islã. O Iêmen foi um centro de cultivo importante, de onde se propagou pelo resto do Mundo Árabe.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/CoffeePalestineStereo.jpg/250px-CoffeePalestineStereo.jpg"
            },
            // Tem algum problema em adoçar a água para preparar o café?
            "((.*)(((.*)adoçar(.*)?(agua|água))|((.*)açucar(.*)agua))(.*)(café|cafe)(.*))" : {
              response: "<p>Ao colocar açúcar junto com a água para preparar o cafezinho de cada dia, você acaba alterando o ponto da ebulição, a textura da bebida e o sabor do café. Ele pode virar um verdadeiro xarope. Se você não quer que isso aconteça, adoce o café depois de pronto ou aprenda a apreciar a bebida pura.</p>",
              image: "http://www.dicasdemulher.com.br/wp-content/uploads/2014/01/dieta-sem-acucar.jpg"
            },
            // Como adoçar cafe
            "(((.*)?(adoçar|adoçado)(.*)?(café|cafe)(.*)?)|((.*)?(café|cafe)(.*)?(doce|docinho|adoçado)))": {
              response: "<p>No Brasil, a maneira mais tradicional de se adoçar o café é com a utilização de açúcar refinado. Esse tipo de adoçamento faz parte da cultura dos brasileiros, visto que nosso país é o maior produtor mundial de cana e também de açúcar. Mas esse ingrediente não é uma boa opção para o café, porque muda bastante o sabor da bebida e deve, por isso, ser usado com moderação.</p><p> Veja todas as outras maneiras de adoçar seu cafezinho: Açúcar mascavo; Melado de cana; Açúcar demerara; Mel; Açúcar orgânico; Açúcar de beterraba; Adoçantes",
              image: "http://www.goldadocantes.com.br/blog/wp-content/uploads/2014/09/7-formas-alternativas-de-ado%C3%A7ar-seu-cafezinho-686x350.png"
            },
            "((.*)?(xicara|xícara)(.*)?(café|cafe)(.*)?)": {
              response: "<p>Não é uma regra, mas é comum e recomendado degustar o café usando a <strong>xícara de café.</strong>. Esta xícara tem aproximadamente 50ml e pode ser adquirida em qualquer supermercado ou lojas de decoração.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/200px-A_small_cup_of_coffee.JPG"
            },
            // O Café descafeinado não tem cafeína mesmo?
            "((.*)?(café|cafe)(.*)?(descafeinado)(.*)?(cafeina|cafeína)(.*)?)": {
              response: "<p>O café descafeinado tem cafeína sim, porém bem pouca. Para ser considerado descafeinado, o café precisa ter no máximo  0,1 g/100g de cafeína. Cumpre ressaltar que a quantidade de cafeína no produto varia de acordo com a marca, com o tipo e com o lote do café.</p>",
              image: "http://www.life-studio.es/wp-content/uploads/2013/07/TLMD_09.05.12_cafeina.jpg"
            },
            // Efeitos da cafeina
            "((.*)?(efeito|efeitos|problemas|problema)(.*)?(cafeina|cafeína)(.*)?)": {
              response: "<p>Se você estiver precisando de uma forcinha para finalizar um trabalho ou aguentar mais algumas horas acordado, a boa notícia é que a cafeína tem um efeito quase imediato no organismo. Segundo o American Academy of Sleep Medicine, a substância alcança seu pico no sangue entre 30 e 60 minutos após a ingestão. Existe ainda um estudo que aponta que o estado de alerta pode surgir em apenas 10 minutos.</p><p>Normalmente, o corpo leva de 3 a 5 horas para eliminar metade da substância e é preciso entre 8 e 14 horas para que o organismo esteja totalmente livre da cafeína. Especialistas em sono recomendam abster-se do café por, no mínimo, oito horas antes de dormir para evitar desconfortos durante o sono. Logicamente, os efeitos podem variar e costumam ser mais visíveis em pessoas que não ingerem cafeína regularmente.</p>",
              image: "http://ibxk.com.br/2013/8/materias/2158950942911653.jpg?w=1040"
            },
            // Quanto posso tomar de cafe/cafeina
            "((.*)?(quantidade|quanto|consumo|consumir)(.*)?(cafeina|cafeína|café|cafe)(.*)?)": {
              response: "<p>Uma xícara de café tradicional apresenta entre 95 mg e 200 mg da substância.</p><p>Estudos revelam que os americanos têm um consumo moderado da bebida, que fica entre 200 mg e 300 mg do estimulante por dia. Passando desse limite, o consumo é considerado pesado (entre 500 mg e 600 mg) e pode trazer efeitos colaterais.</p>",
              image: "http://ibxk.com.br/2013/8/materias/2158950942911814.jpg?w=1040"
            },
            // Cafe faz bem
            "((.*)?(café|cafe)(.*)?(faz bem)(.*)?)": {
              response: "<p>Estudos comprovam que o consumo moderado de café (de três a quatro xícaras por dia) exerce efeito de prevenção de problemas tão diversos como o mal de Parkinson, a depressão, o diabetes , os cálculos biliares e o câncer de cólon. Além disso melhora a atenção e, consequentemente, o desempenho escolar e a produtividade no trabalho, ou seja, o café faz bem sim! (Moderadamente)</p>",
              image: "http://jornaltribunadonorte.net/wp-content/uploads/2014/01/woman-with-coffee-1.jpg"
            },
            // Café faz mal à saúde?
            "((.*)?(café|cafe)(.*)?(mal|faz mal|saúde|bem|faz bem|prejudica|prejudicial|saudável|saudavel|saude|problemas|problema)(.*)?)": {
              response: "<p>O café só faz mal quando consumido em altas doses diárias. Quando tomado com equilíbrio, o café é uma boa fonte de energia, mantém o estado de alerta do corpo, além de conter lipídios, sais minerais, vitaminas e antioxidantes essenciais para a saúde.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/200px-A_small_cup_of_coffee.JPG"
            },
            // O café é muito calórico?
            "(((café|cafe)(.*)?(calórico|calorico|calorias|engorda|emagrece|emagrecer|peso|gordo|gordura|gorda|caloria|engordar))|((.*)?(calórico|calorico|calorias|emagrece|peso|engorda|gordo|gordura|gorda|caloria|engordar)(.*)?(café|cafe))(.*)?)": {
              response: "<p>As calorias do café são mínimas. Só para se ter ideia, uma xícara de café amargo contém em média 2 kcal. O problema para a dieta são os acompanhamentos do café. Ele se torna mais calórico quando acompanhado de leite, açúcar, creme, chantilly, chocolate, etc.</p>",
              image: "http://www.vanillamap.com/wp-content/uploads/2014/11/Coffee-and-Breakfast.png"
            },
            // Tabela nutricional do cafe
            "((.*)?(valor nutricional|tabela nutricional|nutricional)(.*)(café|cafe)(.*)?)": {
              response: "<p><strong>Valor nutricional por cada 100g</strong>kJ	2<br/>Carboidratos	0<br/>Gordura	0,02 g<br/>Gordura saturada	0,02 g<br/>Gordura trans	0 g<br/>Gordura monoinsaturada	0,015 g<br/>Gordura polinsaturada	0,001 g<br/>Água	99,39 g<br/>Proteínas	0,12 g<br/>Cafeína	40 mg<br/>Vitamina A	0 ug<br/>Betacaroteno	0 ug<br/>Vitamina B1	0,014 mg<br/>Vitamina B2	0,076 mg<br/>Vitamina B3	0,191 mg<br/>Vitamina B5	0,254 mg<br/>Vitamina B6	0,001 mg<br/>Vitamina E	0,01 mg<br/>Vitamina K	0,0001 mg<br/>Cálcio	2 mg<br/>Ferro	0,01 mg<br/>Magnésio	3 mg<br/>Manganésio	0,023 mg<br/>Fósforo	3 mg<br/>Potássio	49 mg<br/>Sódio	2 mg<br/>Zinco	0,02 mg<br/></p>",
              image: null
            },
            // O que é mocha
            "((.*)?(o que|significa|café|cafe)(.*)?(mocha|moca)(.*)?)": {
              response: "<p>Moca (em árabe: المخا, pronunciado 'al-Mukhā'') é uma variedade nobre de café da espécie Coffea arabica, que provinha do porto de Moca, no Iêmen. Entre os séculos XV e XVII, Moca foi o mais importante mercado de café do mundo.",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mocha_Latte_Costa_Rica.JPG/1280px-Mocha_Latte_Costa_Rica.JPG"
            },
            // Como fazer café
            "((.*)?(como fazer|como faz|fazer)(.*)?(café|cafe)(.*)?)": {
              response: "<p>O jeito que a vovó fazia café, o processo de “coar” envolve colocar o pó dentro de um coador de pano, ao mesmo tempo em que se passa água aquecida em uma panela ou chaleira por ele. O coador é disposto em cima de uma xícara ou bule enquanto a água passa pelo pó. Um dos meios de preparo é esquentar brevemente a água e misturar, a ela, o pó de café. Não deixe que a água levante fervura, o que torna o café mais amargo.</p><p>Você também pode usar filtros de papel para a coagem, nesse caso será preciso um pequeno porta-filtro de tamanho compatível com o tamanho de filtro a ser utilizado. Depois de usado, descarte o filtro no lixo. Como fazer? Use uma colher de sopa para medir o tanto de café que você deseja. Para um litro de água, utilize entre 5 e 6 colheres de sopa cheia.</p>",
              image: "http://eglu.pontofrio.com.br/wp-content/uploads/2013/05/guia-do-solteiro-cafe.jpg"
            },
            // Café mais caro do mundo
            "((.*)?(melhor|mais caro|caro|melhores cafés)(.*)?)": {
              response: "<p>Com o nome de Kopi Luwak, os grãos passam por um processo muito especial de preparação, que fornece aroma e sabor únicos à bebida: antes de serem torrados, eles são ingeridos e — pasmem — processados pelo estômago e intestino de pequenos mamíferos conhecidos como civetas.</p><p>Em outras palavras, estamos tentando dizer isso mesmo que você entendeu. Os grãos usados para preparar o café mais caro do mundo são, necessariamente, expelidos nas fezes da cevita antes de irem para as prateleiras. Produzido nas ilhas de Sumatra, Bali e Java, o quilo do Kopi Luwak custa, em média, US$ 500 (R$ 1.000), na Indonésia. No Brasil, é possível degustar uma xícara pequena da bebida por cerca de R$ 20. Mas, é claro, o produto está disponível apenas em cafeterias gourmets.</p>",
              image: "http://ibxk.com.br/2012/8/materias/6713677710191336.jpg?w=1040"
            },
            // qual o processo de beneficiamento do café?
            "((.*)?(processo|produção|producao|beneficiamento|produzir|colher|colheita)(.*)?(café|cafe)(.*)?)": {
              response: "<p>Veja o processo de produção do café: </p> <div class='row'><div class='col-md-6'><p><strong> Etapas Pré-colheita</strong><br/><img src='http://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Cafe/CafeOrganico_2ed/imagens/fluxograma01.gif' class='img-responsive'></p></div><div class='col-md-6'><p><strong> Etapas Pós-colheita</strong><br/><img src='http://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Cafe/CafeOrganico_2ed/imagens/fluxograma02.gif' class='img-responsive'></p></div>",
              image: null
            },
            // quais as técnicas de cultivo do café?
            "((.*)?(cultivo|cultivar)(.*)?(café|cafe)(.*)?)": {
              response: "As plantas de café são cultivadas a partir das sementes, em sementeiras, até que tenham duas folhas verdadeiras. As mudas são sombreadas para evitar perda excessiva de água. Após 3 meses, são movidas para viveiros, onde crescem até 20-40 cm de altura antes de serem transplantadas para o campo no início da estação chuvosa.",
              image: "http://paraquat.com/sites/default/files/5.2.15%20img%204.png"
            },
            // Onde comprar café
            "((.*)?(onde|lugar)(.*)?(comprar|compro)(.*)?(café|cafe)(.*)?)": {
              response: "É possivel comprar café em quase todo supermercado ou padaria no Brasil. Nos tempos atuais ainda existe a possibilidade de adquirir cafés através da internet, você nem precisa sair de casa!",
              image: "http://www.guarulhosweb.com.br/fotos/-----2011/02-21/cafe.jpg"
            },
            "((.*)?(materia|matéria)(prima)(.*)?(café|cafe)(.*)?)": {
              response: "Café é a semente do cafeeiro. A semente é uma pequena esfera verde, que quando atinge o estado maduro para a colheita tem um vermelho intenso. Cada fruto costuma possuir duas pequenas sementes semi-esféricas com seus lados planos virados para si. O café é constituído majoritariamente de endosperma que contém altas quantidades da subtância cafeína ( 0.8 - 2.5% ), nomeada a partir da semente. A semente possuiu grande importância comercial, como é usada para produzir o café (bebida) e é um produto de exportação significativo para muitos países.",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Coffee_Bean_Structure.svg/220px-Coffee_Bean_Structure.svg.png"
            }
          }
        }
      }
