import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPainelComponent } from './admin-painel.component';

describe('AdminPainelComponent', () => {
  let component: AdminPainelComponent;
  let fixture: ComponentFixture<AdminPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
