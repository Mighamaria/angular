import { TestBed } from '@angular/core/testing';

import { EmployeRegService } from './employe-reg.service';

describe('EmployeRegService', () => {
  let service: EmployeRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
