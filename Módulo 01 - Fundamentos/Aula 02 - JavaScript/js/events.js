window.addEventListener('load', start);

function start() {
  var input = document.getElementById('nome');
  input.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  // quando um evento acontece, ele cria um elemento que possui um target e dentro dele o value com o valor da tecla utilizada
  var count = event.target.value;

  var span = document.getElementById('count');
  span.innerText = count.length;
}

// evita que o forms tenha seu comportamento padrão
function preventSubmit(event) {
  event.preventDefault();
}
