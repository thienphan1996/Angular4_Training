import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachdangkyComponent } from './danhsachdangky.component';

describe('DanhsachdangkyComponent', () => {
  let component: DanhsachdangkyComponent;
  let fixture: ComponentFixture<DanhsachdangkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachdangkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachdangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
