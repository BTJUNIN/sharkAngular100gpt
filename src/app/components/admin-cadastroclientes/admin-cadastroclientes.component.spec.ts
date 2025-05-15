import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroclientesComponent } from './admin-cadastroclientes.component';

describe('AdminCadastroclientesComponent', () => {
  let component: AdminCadastroclientesComponent;
  let fixture: ComponentFixture<AdminCadastroclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadastroclientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadastroclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
