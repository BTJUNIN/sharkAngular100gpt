import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMaquinasComponent } from './landing-maquinas.component';

describe('LandingMaquinasComponent', () => {
  let component: LandingMaquinasComponent;
  let fixture: ComponentFixture<LandingMaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMaquinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
