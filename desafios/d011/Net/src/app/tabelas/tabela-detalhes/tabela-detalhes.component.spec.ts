import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDetalhesComponent } from './tabela-detalhes.component';

describe('TabelaDetalhesComponent', () => {
  let component: TabelaDetalhesComponent;
  let fixture: ComponentFixture<TabelaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
