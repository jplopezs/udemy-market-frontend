import { TestBed } from '@angular/core/testing';

import { SearchPedidosService } from './search-pedidos.service';

describe('SearchPedidosService', () => {
  let service: SearchPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
