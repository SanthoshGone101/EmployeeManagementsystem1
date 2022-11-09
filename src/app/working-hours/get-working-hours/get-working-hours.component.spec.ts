import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWorkingHoursComponent } from './get-working-hours.component';

describe('GetWorkingHoursComponent', () => {
  let component: GetWorkingHoursComponent;
  let fixture: ComponentFixture<GetWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWorkingHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
