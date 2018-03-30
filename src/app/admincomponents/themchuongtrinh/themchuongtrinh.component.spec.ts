import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemchuongtrinhComponent } from './themchuongtrinh.component';

describe('ThemchuongtrinhComponent', () => {
  let component: ThemchuongtrinhComponent;
  let fixture: ComponentFixture<ThemchuongtrinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemchuongtrinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemchuongtrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
