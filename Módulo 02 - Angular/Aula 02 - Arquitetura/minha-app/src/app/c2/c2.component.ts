import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  // ao invés de passar o html com o código, pode passar no próprio template, template inline
  template: 'esse é o código do template',
  styleUrls: ['./c2.component.css'],
})
export class C2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
