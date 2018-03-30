import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemgiaovienComponent } from './themgiaovien.component';

describe('ThemgiaovienComponent', () => {
  let component: ThemgiaovienComponent;
  let fixture: ComponentFixture<ThemgiaovienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemgiaovienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemgiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
