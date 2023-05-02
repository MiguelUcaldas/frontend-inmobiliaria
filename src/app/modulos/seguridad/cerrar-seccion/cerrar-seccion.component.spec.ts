import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSeccionComponent } from './cerrar-seccion.component';

describe('CerrarSeccionComponent', () => {
  let component: CerrarSeccionComponent;
  let fixture: ComponentFixture<CerrarSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
