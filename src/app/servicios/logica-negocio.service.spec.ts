import { TestBed } from '@angular/core/testing';

import { LogicaNegocioService } from './logica-negocio.service';

describe('LogicaNegocioService', () => {
  let service: LogicaNegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicaNegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
