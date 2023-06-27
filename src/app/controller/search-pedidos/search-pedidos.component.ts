import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/Pedido';
import { SearchPedidosService } from 'src/app/service/search-pedidos.service';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-search-pedidos',
  templateUrl: './search-pedidos.component.html',
  styleUrls: ['./search-pedidos.component.css']
})
export class SearchPedidosComponent implements OnInit {

  allPedidos: Pedido[];
  cliente: number;
  nombreCliente: string;

  constructor(private searchPedidoService: SearchPedidosService, private globalComponent: GlobalComponent) {
    this.cliente = this.globalComponent.cliente.id;
    this.nombreCliente = this.globalComponent.cliente.nombre;
  }

  ngOnInit(): void {

    this.allPedidos = [];
    this.searchPedidoService.searchPedidos(this.cliente).subscribe(
      data => this.allPedidos = data
    );

  }

  pedidos(): Pedido[] {

    return this.allPedidos.filter(ps => ps.estado != "Error");

  }

}
