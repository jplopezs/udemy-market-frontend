import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(cliente: Cliente): Observable<any>{

    let url = "http://localhost:8000/market/clientes/create";

    return this.http.post(url, cliente);

  }

}
