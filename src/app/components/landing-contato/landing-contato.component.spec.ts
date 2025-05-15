import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContatoComponent } from './landing-contato.component';

describe('LandingContatoComponent', () => {
  let component: LandingContatoComponent;
  let fixture: ComponentFixture<LandingContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
