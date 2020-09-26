console.log('timers');

window.addEventListener('load', () => {
  const div = document.querySelector('.timer');
  let count = 0;

  const interval = setInterval(() => {
    // o ++ na frente incrementa primeiro e depois executa
    div.innerHTML = ++count;

    // se o count for 20, ele interrompe o intervalo da função que está rodando
    if (count === 10) {
      this.clearInterval(interval);
      // interrompe a função, impedindo que adicione o meio que viria logo depois na funçaõ
      return;
    }

    // se o número for múltiplo de 5, ele adiciona o ',5' ao final com o setTimeout
    if (count % 5 === 0) {
      setTimeout(() => {
        div.innerHTML = count + ',5';
      }, 100);
    }
  }, 1000);
});
