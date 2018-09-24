import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVillianComponent } from './edit-villian.component';

describe('EditVillianComponent', () => {
  let component: EditVillianComponent;
  let fixture: ComponentFixture<EditVillianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVillianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
