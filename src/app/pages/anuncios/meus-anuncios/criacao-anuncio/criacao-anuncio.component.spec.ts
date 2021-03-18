import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoAnuncioComponent } from './criacao-anuncio.component';

describe('CriacaoAnuncioComponent', () => {
  let component: CriacaoAnuncioComponent;
  let fixture: ComponentFixture<CriacaoAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriacaoAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
