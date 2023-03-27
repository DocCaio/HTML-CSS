import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEditarComponent } from './tabela-editar.component';

describe('TabelaEditarComponent', () => {
  let component: TabelaEditarComponent;
  let fixture: ComponentFixture<TabelaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
