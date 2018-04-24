import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiettotnghiepComponent } from './chitiettotnghiep.component';

describe('ChitiettotnghiepComponent', () => {
  let component: ChitiettotnghiepComponent;
  let fixture: ComponentFixture<ChitiettotnghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitiettotnghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitiettotnghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
