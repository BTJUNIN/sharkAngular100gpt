import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingObrasComponent } from './landing-obras.component';

describe('LandingObrasComponent', () => {
  let component: LandingObrasComponent;
  let fixture: ComponentFixture<LandingObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingObrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
