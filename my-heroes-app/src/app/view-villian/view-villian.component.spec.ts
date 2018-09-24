import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVillianComponent } from './view-villian.component';

describe('ViewVillianComponent', () => {
  let component: ViewVillianComponent;
  let fixture: ComponentFixture<ViewVillianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVillianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
