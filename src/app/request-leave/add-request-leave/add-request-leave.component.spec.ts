import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestLeaveComponent } from './add-request-leave.component';

describe('AddRequestLeaveComponent', () => {
  let component: AddRequestLeaveComponent;
  let fixture: ComponentFixture<AddRequestLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequestLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRequestLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
