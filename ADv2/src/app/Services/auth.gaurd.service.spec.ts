import { TestBed } from '@angular/core/testing';

import { Auth.GaurdService } from './auth.gaurd.service';

describe('Auth.GaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.GaurdService = TestBed.get(Auth.GaurdService);
    expect(service).toBeTruthy();
  });
});
