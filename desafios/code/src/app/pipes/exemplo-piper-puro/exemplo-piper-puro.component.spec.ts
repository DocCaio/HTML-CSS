import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPiperPuroComponent } from './exemplo-piper-puro.component';

describe('ExemploPiperPuroComponent', () => {
  let component: ExemploPiperPuroComponent;
  let fixture: ComponentFixture<ExemploPiperPuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploPiperPuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploPiperPuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
