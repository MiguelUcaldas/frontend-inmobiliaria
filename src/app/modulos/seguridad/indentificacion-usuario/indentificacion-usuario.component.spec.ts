import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndentificacionUsuarioComponent } from './indentificacion-usuario.component';

describe('IndentificacionUsuarioComponent', () => {
  let component: IndentificacionUsuarioComponent;
  let fixture: ComponentFixture<IndentificacionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentificacionUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndentificacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
