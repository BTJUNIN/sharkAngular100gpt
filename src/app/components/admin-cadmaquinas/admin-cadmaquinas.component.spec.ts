import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadmaquinasComponent } from './admin-cadmaquinas.component';

describe('AdminCadmaquinasComponent', () => {
  let component: AdminCadmaquinasComponent;
  let fixture: ComponentFixture<AdminCadmaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadmaquinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadmaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
