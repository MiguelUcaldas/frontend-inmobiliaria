import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaInmuebleComponent } from './renta-inmueble.component';

describe('RentaInmuebleComponent', () => {
  let component: RentaInmuebleComponent;
  let fixture: ComponentFixture<RentaInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentaInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
