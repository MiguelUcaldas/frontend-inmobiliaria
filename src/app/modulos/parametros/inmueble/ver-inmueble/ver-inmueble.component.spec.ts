import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInmueblerComponent } from './ver-inmueble.component';

describe('VerInmueblerComponent', () => {
  let component: VerInmueblerComponent;
  let fixture: ComponentFixture<VerInmueblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInmueblerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerInmueblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
