import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPedidosService {

  constructor(private http:HttpClient) { }

  searchPedidos(cliente: number): Observable<any>{

    let url = "http://localhost:8002/market/pedidos/pedidos";
    let parameters = new HttpParams();
    parameters = parameters.append("id", cliente);

    return this.http.get(url, {"params": parameters});

  }

}
