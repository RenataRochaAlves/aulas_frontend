import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiTacToeComponent } from './ti-tac-toe.component';

describe('TiTacToeComponent', () => {
  let component: TiTacToeComponent;
  let fixture: ComponentFixture<TiTacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiTacToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
