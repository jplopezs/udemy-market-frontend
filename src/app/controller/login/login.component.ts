import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { GlobalComponent } from '../global/global.component';
import { LoginService } from './../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string;
  password: string;
  cliente: Cliente;

  constructor(private loginService: LoginService, private globalComponent: GlobalComponent, private router: Router) { }

  login() {

    document.getElementById("login-error").className = "text-error";
    this.loginService.login(this.usuario, this.password).subscribe({
      next: data => {
        this.cliente = data;
        if (this.cliente != null) {
          this.globalComponent.cliente = this.cliente;
          this.globalComponent.activeSession = true;
          this.router.navigate(["/orders"]);
        }
      },
      error: err => {
        document.getElementById("login-error").className = "text-error-show";
      }
    });

  }

}
