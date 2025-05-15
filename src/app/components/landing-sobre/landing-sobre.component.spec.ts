import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSobreComponent } from './landing-sobre.component';

describe('LandingSobreComponent', () => {
  let component: LandingSobreComponent;
  let fixture: ComponentFixture<LandingSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
