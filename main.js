const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  //para cada elemento de toggle faça (eu que nomeio, posso chamar div, etc)
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //pega dentro do nav a lista de classe e vai ligar/desligar toggle (show)
  }) //adiciona evento ouvinte -> recebe argumento ciclk + função anonima (oquefazer)
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der scroll*/

const header = document.querySelector('header')
const navHeight = header.offsetHeight /*deslocamento da altura*/

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeigth) {
    //scroll maior que a alteura do header
    header.classList.add('scroll')
  } else {
    // menos que a altura do header
    header.classList.remover('scroll')
  }
})

//  -------- DOM Document Object Model-----

//  modelagem do doc html em objetivos javascript - > pega tudo e transforma em objetos
//objetivo DOCUMENT (giganteeeeeeee - o que aqui dentro me ajuda a me comunicar com o computador)
// consigo controlar todo meu html pelo javascript
// query é uma funcionalidade que espera uma string que tem     semelhança com o seletor css (uso a tag igual usaria no css)  - faço o objeto documento procurrar no seletor e atribuir a essa constante
//estudar diferenças var let const
// --------ANOTAÇÕES DE ESTUDOS---------------------------------------
//
// char- caractere a b c d...
//string - sequencia de caractere SEMPRE ' ' ou " "
//number - 1 2 3 ...
//BOLLEAN: true or false

//agrupar dados-> estrutura de dados -> objetos sao boas opções

//OBJETOS SÃO UM CONJUNTO DE ATRIBUTOS E FUNCIONALIDADES

//objetos: sempre com virgula , agrupado com ( ) dentro sao os atributos e funcionalidades

//função -> agrupa sequencia de dados -> só funciona com declaração de variáveis
// e com funcao('parametro/argumento') or funcao(1)  or funcao(true)
//CRIA A SEQUENCIA DE PASSOS DA APLICAÇÃO E EXECUTA A SEQUENCIA

//function liquidificador(frutas) {
//  alert(frutas)
//}

//liquidificador('maça banana') NOME-> variáveis
// VARIAVEL   var      = -> sinal de atribuição , le variavel nome recebe mayk, ou maik é atribuido a variavel nome
//CONSTANTE   const     tipo de variavel que não muda

//const pessoa = {
// name: 'mayk', //chave/propriedade - valor
//age: 37, /// propriedades e funcionalidades do OBJETO pessoa
//falar: function () {
//  alert(pessoa.name)
//  }
//}

//pessoa.falar()
