import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInmuebleVentaComponent } from './ver-inmueble-venta.component';

describe('VerInmuebleVentaComponent', () => {
  let component: VerInmuebleVentaComponent;
  let fixture: ComponentFixture<VerInmuebleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInmuebleVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInmuebleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
