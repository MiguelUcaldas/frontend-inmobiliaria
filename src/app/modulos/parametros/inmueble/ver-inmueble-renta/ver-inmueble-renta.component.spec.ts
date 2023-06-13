import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInmuebleRentaComponent } from './ver-inmueble-renta.component';

describe('VerInmuebleRentaComponent', () => {
  let component: VerInmuebleRentaComponent;
  let fixture: ComponentFixture<VerInmuebleRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInmuebleRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInmuebleRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
