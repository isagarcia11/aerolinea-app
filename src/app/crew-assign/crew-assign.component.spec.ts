import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewAssignComponent } from './crew-assign.component';

describe('CrewAssignComponent', () => {
  let component: CrewAssignComponent;
  let fixture: ComponentFixture<CrewAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
