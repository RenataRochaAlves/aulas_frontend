// sintaxe (parâmetro: tipo) : tipo de retorno da função
function soma(a: number, b: number): number {
  return a + b;
}

// permite passar um array com itens do mesmo tipo
// tipo any indica que pode ser de qualquer tipo
function imprime(x: string[], y: any) {
  console.log(x + y);
}

// identifica o tipo sozinho quando atribuimos um valor na inicialização da variável
let x: number = 5;

// é possível criar um novo tipo para ser utilizado e não ter que definir todos os parâmetros nas funções
interface Aluno {
  nome: string;
  matricula: number;
  // o ? indica que o campo é opcional
  nascimento?: string;
}

// o que tem a mais (turma) não é acessado em funções que recebem tipo Aluno
let aluno2 = {
  nome: 'Ana',
  matricula: 563,
  nascimento: '02/06/1999',
  turma: 3,
};

function cadastraAluno(aluno: Aluno) {}

cadastraAluno({ nome: 'Daniel', matricula: 123, nascimento: '12/05/2000' });

// o compilador identifica como um tipo Aluno por conta da estrutura do tipo, sem precisar declarar (duck typing)
cadastraAluno(aluno2);

class Estudante {
  nome: string;
  matricula: number;

  salvar() {}
}

let estudante1 = new Estudante();
