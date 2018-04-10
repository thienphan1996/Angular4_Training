import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhdaotaoComponent } from './nganhdaotao.component';

describe('NganhdaotaoComponent', () => {
  let component: NganhdaotaoComponent;
  let fixture: ComponentFixture<NganhdaotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NganhdaotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NganhdaotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
