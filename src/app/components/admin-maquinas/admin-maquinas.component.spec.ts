import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaquinasComponent } from './admin-maquinas.component';

describe('AdminMaquinasComponent', () => {
  let component: AdminMaquinasComponent;
  let fixture: ComponentFixture<AdminMaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMaquinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
