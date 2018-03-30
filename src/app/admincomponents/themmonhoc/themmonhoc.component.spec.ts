import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemmonhocComponent } from './themmonhoc.component';

describe('ThemmonhocComponent', () => {
  let component: ThemmonhocComponent;
  let fixture: ComponentFixture<ThemmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
