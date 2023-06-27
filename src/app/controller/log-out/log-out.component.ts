import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  constructor(private globalComponent: GlobalComponent, private router: Router) {

    this.globalComponent.cliente = null;
    this.globalComponent.activeSession = false;
    this.router.navigate(["/login"]);

  }


}
