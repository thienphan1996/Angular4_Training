import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudaotaoComponent } from './menudaotao.component';

describe('MenudaotaoComponent', () => {
  let component: MenudaotaoComponent;
  let fixture: ComponentFixture<MenudaotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudaotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudaotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
