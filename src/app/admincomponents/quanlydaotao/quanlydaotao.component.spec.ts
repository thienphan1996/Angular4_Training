import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydaotaoComponent } from './quanlydaotao.component';

describe('QuanlydaotaoComponent', () => {
  let component: QuanlydaotaoComponent;
  let fixture: ComponentFixture<QuanlydaotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlydaotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydaotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
