import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaNovaComponent } from './peca-nova.component';

describe('PecaNovaComponent', () => {
  let component: PecaNovaComponent;
  let fixture: ComponentFixture<PecaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecaNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
