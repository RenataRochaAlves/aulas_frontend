// o JavaScript aponta mais erros, pode ser usado dentro de funções
'use strict';

window.addEventListener('load', () => {
  doMap();
});

// MÉTODOS IMUTÁVEIS, não alteram o vetor inicial, apenas copiam os dados pra um novo

// transforma os dados de um array com base em um parametro de callback
// callback é uma função passada como um parâmetro pra outra função
// nesse caso, a const vai receber apenas os dados de nome e email do objeto people
// o map recebe cada elemento do array e então aplica a função do callback nele
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  return nameEmailArray;
}

// estrutura igual a do map, coloca uma função de callback com cada elemento do array como parâmetro
// o filter verifica se o elemento atende a condição do return, se true, adiciona na const, se não, descarta
function doFilter() {
  const olderThan50 = people.results.filter((people) => {
    return person.dob.age > 50;
  });
}

// funciona parecido com o map, porém não tem um return, atua diretamente no elemento
function doForeach() {
  const mapedPeople = doMap();

  mapedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
}

// reduce retorna apenas um valor, faz alguma operação com os dados
// o callback precisa de dois parâmetros, o que vai acumular os dados e o elemento atual de cada operação
// na hora de somar, precisa indicar a posição da info no elemento atual
// após o callback, ainda nos parâmetros do reduce, precisa indicar o valor inicial, no caso o 0
function doReduce() {
  const totalAges = people.results.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual.dob.age;
  }, 0);
}

// o find restorna apenas a primeira ocorrencia que se encaixa no que foi passado no callback
function doFind() {
  const minasGerais = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
}

// retorna true ou false se existe um elemento com as condições passadas no callback
function doSome() {
  const minasGerais = people.results.some((person) => {
    return person.location.state === 'Minas Gerais';
  });
}

// retorna true ou false se TODOS os elementos se encaixam na condição do callback
function doEvery() {
  const minasGerais = people.results.every((person) => {
    return person.location.state === 'Minas Gerais';
  });
}

// quando o que se está trabalhando com strings, a função sort sem parâmetros ordena sozinha
function doSort() {
  const sortedNames = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => {
      // já pode emendar outra função de array logo após a execução da anterior
      return person.startsWith('A');
      // startsWith já é uma função do JavaScript
    })
    .sort();
  // com strings o sort ordena mesmo sem passar parâmetros
}

// quando se está trabalhando com objetos, é preciso criar um callback que faz a comparação entre dois elementos
function doSort2() {
  const sortedNames2 = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => {
      // já pode emendar outra função de array logo após a execução da anterior
      return person.startsWith('A');
      // startsWith já é uma função do JavaScript
    })
    .sort((a, b) => {
      // passa dois parâmetros e a função localeCompare faz a comparação entre os dois e ordena
      return a.name.localeCompare(b.name);
    });
  // com strings o sort ordena mesmo sem passar parâmetros
}
