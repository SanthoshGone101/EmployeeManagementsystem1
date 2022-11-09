import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDesignationComponent } from './get-designation.component';

describe('GetDesignationComponent', () => {
  let component: GetDesignationComponent;
  let fixture: ComponentFixture<GetDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
