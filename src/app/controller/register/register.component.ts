import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  cliente: Cliente = new Cliente();
  constructor(private registerService: RegisterService, private router: Router) { }

  register() {

    document.getElementById("register-error").className = "text-error";
    this.registerService.register(this.cliente).subscribe({
      next: data => {
        alert("Usuario creado con éxito. Inicie sesión para continuar.");
        this.router.navigate(["/login"]);
      },
      error: err => {
        document.getElementById("register-error").className = "text-error-show";
      }
    }
    );

  }

}
