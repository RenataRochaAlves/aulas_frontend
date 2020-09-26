console.log('antes da promise');

// depois do fetch pode usar o catch/then
// then para quando da certo (passando um callback) e catch pra quando da errado, passando uma mensagem de erro
fetch('https://api.github.com/users/renatarochaalves')
  .then((res) => {
    // assim que dá certo, o then recebe uma resposta que não pode ser usada imediatamente
    // o .json() transforma em um objeto json, mas isso leva um tempo, por isso precisa passar um novo .then logo após
    // o novo then recebe o objeto json como parâmetro e passa a função de callback para fazer algo com os dados recebidos
    res.json().then((data) => console.log(data));
  })
  .catch((error) => {
    console.log('Aconteceu um erro');
  });

// forma mais elegante de escrever funções assíncronas
// precisa do ASYNC antes da declaração da função
async function doFetch() {
  // cria variáveis que vão armazenar os dados quando eles forem processados
  // precisa do AWAIT no começo da atribuição da variável
  const res = await fetch('https://api.github.com/users/renatarochaalves');
  const json = await res.json();
  console.log(json);
}

doFetch();

function divisionPromise(a, b) {
  // cria uma promise e passa um callback contendo resolve (pra quando da certo) e reject (pra quando da errado)
  return new Promise((resolve, reject) => {
    if (b === 0) {
      // cria a mensagem a ser exibida quando da errado
      reject('Não é possível dividir por 0');
    }
    resolve(a / b);
  });
}

divisionPromise(6, 0)
  // executa a função, se der certo, pega o resultado retornado como parâmetro e exibe
  .then((result) => console.log(result))
  // se der errado, pega a mensagem de erro gravada no reject e exibe
  .catch((errorMessage) => console.log('Falha na divisão ' + errorMessage));
