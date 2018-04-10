import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemmonhocComponent } from './diemmonhoc.component';

describe('DiemmonhocComponent', () => {
  let component: DiemmonhocComponent;
  let fixture: ComponentFixture<DiemmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiemmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
