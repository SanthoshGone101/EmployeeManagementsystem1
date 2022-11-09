import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaymantRulesComponent } from './get-paymant-rules.component';

describe('GetPaymantRulesComponent', () => {
  let component: GetPaymantRulesComponent;
  let fixture: ComponentFixture<GetPaymantRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPaymantRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPaymantRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
