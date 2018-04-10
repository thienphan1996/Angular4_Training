import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsinhvienvaolopComponent } from './themsinhvienvaolop.component';

describe('ThemsinhvienvaolopComponent', () => {
  let component: ThemsinhvienvaolopComponent;
  let fixture: ComponentFixture<ThemsinhvienvaolopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemsinhvienvaolopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsinhvienvaolopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
