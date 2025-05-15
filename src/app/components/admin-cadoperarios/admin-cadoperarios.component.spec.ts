import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadoperariosComponent } from './admin-cadoperarios.component';

describe('AdminCadoperariosComponent', () => {
  let component: AdminCadoperariosComponent;
  let fixture: ComponentFixture<AdminCadoperariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadoperariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadoperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
