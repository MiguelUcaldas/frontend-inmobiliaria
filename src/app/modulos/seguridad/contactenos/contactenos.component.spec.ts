import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactenosComponent } from './contactenos.component';

describe('ConctactenosComponent', () => {
  let component: ConctactenosComponent;
  let fixture: ComponentFixture<ConctactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConctactenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConctactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
