import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  categorias(): Observable<any>{

    let url = "http://localhost:8001/market/productos/categorias";

    return this.http.get(url);

  }

  productosCategoria(id: number): Observable<any> {

    let url = "http://localhost:8001/market/productos/productos";
    let parameters = new HttpParams();
    parameters = parameters.append("id", id);

    return this.http.get(url, {"params": parameters});

  }

  enviarPedido(cart: Cart[], id: number): Observable<any> {

    let url = "http://localhost:8002/market/pedidos/pedido";
    let parameters = new HttpParams();
    parameters = parameters.append("id", id);

    return this.http.post(url, cart, {"params": parameters});

  }

}
