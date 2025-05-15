import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEquipeComponent } from './landing-equipe.component';

describe('LandingEquipeComponent', () => {
  let component: LandingEquipeComponent;
  let fixture: ComponentFixture<LandingEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
