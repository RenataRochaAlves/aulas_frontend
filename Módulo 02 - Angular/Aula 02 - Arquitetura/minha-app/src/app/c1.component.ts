// sempre tem que importar o comando do app.component.ts
import { Component } from '@angular/core';

// precisa receber um decorator Component com um objeto de configurações / como uma função
@Component({
  // como o componente vai ser chamado em outros lugares, vira uma tag html
  selector: 'c1',
  // aonde o component vai ser usado
  templateUrl: './c1.component.html',
})

// export permite importar a classe em outros arquivos assim como o Component acima
// sintaxe do angular: nomeComponent
export class C1Component {}
