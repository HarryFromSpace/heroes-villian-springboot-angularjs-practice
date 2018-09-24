import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVillianComponent } from './new-villian.component';

describe('NewVillianComponent', () => {
  let component: NewVillianComponent;
  let fixture: ComponentFixture<NewVillianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVillianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
