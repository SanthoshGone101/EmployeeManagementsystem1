import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestLeaveComponent } from './get-request-leave.component';

describe('GetRequestLeaveComponent', () => {
  let component: GetRequestLeaveComponent;
  let fixture: ComponentFixture<GetRequestLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRequestLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRequestLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
