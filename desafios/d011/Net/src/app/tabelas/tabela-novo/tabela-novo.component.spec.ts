import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNovoComponent } from './tabela-novo.component';

describe('TabelaNovoComponent', () => {
  let component: TabelaNovoComponent;
  let fixture: ComponentFixture<TabelaNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
