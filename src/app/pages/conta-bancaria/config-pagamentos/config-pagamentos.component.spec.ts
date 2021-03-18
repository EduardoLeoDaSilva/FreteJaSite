import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPagamentosComponent } from './config-pagamentos.component';

describe('ConfigPagamentosComponent', () => {
  let component: ConfigPagamentosComponent;
  let fixture: ComponentFixture<ConfigPagamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPagamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
