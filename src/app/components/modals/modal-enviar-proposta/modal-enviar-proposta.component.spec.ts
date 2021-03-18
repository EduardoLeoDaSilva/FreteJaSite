import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnviarPropostaComponent } from './modal-enviar-proposta.component';

describe('ModalEnviarPropostaComponent', () => {
  let component: ModalEnviarPropostaComponent;
  let fixture: ComponentFixture<ModalEnviarPropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnviarPropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnviarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
