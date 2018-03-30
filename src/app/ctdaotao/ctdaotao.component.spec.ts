import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtdaotaoComponent } from './ctdaotao.component';

describe('CtdaotaoComponent', () => {
  let component: CtdaotaoComponent;
  let fixture: ComponentFixture<CtdaotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtdaotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtdaotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
