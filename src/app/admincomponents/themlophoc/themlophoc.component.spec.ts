import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemlophocComponent } from './themlophoc.component';

describe('ThemlophocComponent', () => {
  let component: ThemlophocComponent;
  let fixture: ComponentFixture<ThemlophocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemlophocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemlophocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
