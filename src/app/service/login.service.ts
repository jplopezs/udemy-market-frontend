import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(usuario:string, password: string): Observable<any>{

    let url = "http://localhost:8000/market/clientes/authenticate";
    let parameters = new HttpParams();
    parameters = parameters.append("usuario", usuario);
    parameters = parameters.append("password", password);

    return this.http.get(url, {"params": parameters});

  }

}
