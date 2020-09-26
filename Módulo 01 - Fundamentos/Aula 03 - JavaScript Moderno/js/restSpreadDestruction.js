window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructing();
});

function doSpread() {
  const marriedMen = people.results.filter((person) => {
    person.name.title === 'Mr';
  });

  const marriedWoman = people.results.filter((people) => {
    person.name.title === 'Ms';
  });

  // os ... (spread) espalham os elementos dos arrays dentro do segundo array
  const marriedPeople = [...marriedMen, ...marriedWoman];

  console.log(marriedPeople);
}

function doRest() {
  // o ... permite que sejam inseridos quantos parâmetros quiser, ele cria um array com eles
  function infiniteSum(...numbers) {
    // o numbers é um array que pode ser percorrido pelo reduce, adicionando todos os elementos do array
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(infiniteSum(1, 6, 58, 6556, 655));
  console.log(infiniteSum(45, 6, 89));
}

function doDestructing() {
  const first = person.results[0];

  // Método repetitivo
  //   const username = first.login.username;
  //   const password = first.login.password;

  // Método com destructing
  const { username, password } = first.login;
}
