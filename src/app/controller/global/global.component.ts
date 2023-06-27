import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})

export class GlobalComponent {

  activeSession: boolean = false;
  cliente: Cliente;

}
