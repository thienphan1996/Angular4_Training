import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietchuongtrinhComponent } from './chitietchuongtrinh.component';

describe('ChitietchuongtrinhComponent', () => {
  let component: ChitietchuongtrinhComponent;
  let fixture: ComponentFixture<ChitietchuongtrinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietchuongtrinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietchuongtrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
