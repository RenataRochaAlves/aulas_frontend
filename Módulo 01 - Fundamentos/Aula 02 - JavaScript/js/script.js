var a = 6,
  b = 5;

// testa primeiro o que tem maior probabilidade de acontecer
if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(b + ' é maior que ' + a);
  } else {
    console.log(a + ' é igual ' + b);
  }
}

var r = '';
var dia = 2;
// break interrompe o comando caso o caso seja identificado
switch (dia) {
  case 1:
    r = 'domingo';
    break;
  case 2:
    r = 'segunda';
    break;
  case 3:
    r = 'terça';
    break;
  case 4:
    r = 'quarta';
    break;
  case 5:
    r = 'quinta';
    break;
  case 6:
    r = 'sexta';
    break;
  case 7:
    r = 'sábado';
    break;

  default:
    r = 'dia inválido';
    break;
}

console.log(r);

// forma muito utilizada para comparação, quando é maior = positivo, menor = negativo e igual = 0
function compareNumbers(a, b) {
  // if ternário: pergunta ? resposta caso true : resposta caso false
  //   return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
}

console.log(compareNumbers(1, 1));
console.log(compareNumbers(2, 1));
console.log(compareNumbers(1, 2));

var sum = 0;

function superSum(from, upTo) {
  for (let i = from; i < upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log(superSum(2, 5));
console.log(superSum(1, 10));
console.log(superSum(7, 14));
