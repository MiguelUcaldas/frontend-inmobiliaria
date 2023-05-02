import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verificar2FAComponent } from './verificar2-fa.component';

describe('Verificar2FAComponent', () => {
  let component: Verificar2FAComponent;
  let fixture: ComponentFixture<Verificar2FAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Verificar2FAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verificar2FAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
