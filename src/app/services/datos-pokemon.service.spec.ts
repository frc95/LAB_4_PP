import { TestBed } from '@angular/core/testing';

import { DatosPokemonService } from './datos-pokemon.service';

describe('DatosPokemonService', () => {
  let service: DatosPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
