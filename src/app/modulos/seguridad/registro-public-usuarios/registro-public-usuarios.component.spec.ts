import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPublicUsuariosComponent } from './registro-public-usuarios.component';

describe('RegistroPublicUsuariosComponent', () => {
  let component: RegistroPublicUsuariosComponent;
  let fixture: ComponentFixture<RegistroPublicUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPublicUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPublicUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
