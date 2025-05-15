import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOperariosComponent } from './admin-operarios.component';

describe('AdminOperariosComponent', () => {
  let component: AdminOperariosComponent;
  let fixture: ComponentFixture<AdminOperariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOperariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
