import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDiferencialComponent } from './landing-diferencial.component';

describe('LandingDiferencialComponent', () => {
  let component: LandingDiferencialComponent;
  let fixture: ComponentFixture<LandingDiferencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDiferencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingDiferencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
