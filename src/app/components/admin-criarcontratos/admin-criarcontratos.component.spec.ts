import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCriarcontratosComponent } from './admin-criarcontratos.component';

describe('AdminCriarcontratosComponent', () => {
  let component: AdminCriarcontratosComponent;
  let fixture: ComponentFixture<AdminCriarcontratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCriarcontratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCriarcontratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
