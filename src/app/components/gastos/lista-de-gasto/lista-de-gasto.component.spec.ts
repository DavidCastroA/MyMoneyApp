import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeGastoComponent } from './lista-de-gasto.component';

describe('ListaDeGastoComponent', () => {
  let component: ListaDeGastoComponent;
  let fixture: ComponentFixture<ListaDeGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
