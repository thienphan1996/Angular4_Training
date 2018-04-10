import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongtrinhdetailComponent } from './chuongtrinhdetail.component';

describe('ChuongtrinhdetailComponent', () => {
  let component: ChuongtrinhdetailComponent;
  let fixture: ComponentFixture<ChuongtrinhdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuongtrinhdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongtrinhdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
