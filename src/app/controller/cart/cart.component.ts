import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/Cart';
import { Categoria } from 'src/app/model/Categoria';
import { Producto } from 'src/app/model/Producto';
import { PedidoService } from 'src/app/service/pedido.service';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  categorias: Categoria[]
  productos: Producto[]
  categoria: number;
  cart: Cart[];

  constructor(private pedidoService: PedidoService, private globalComponent: GlobalComponent, private router: Router) { }

  ngOnInit(): void {

    this.cart = [];
    this.pedidoService.categorias().subscribe(
      data => this.categorias = data
    );

  }

  loadProductos() {

    this.pedidoService.productosCategoria(this.categoria).subscribe(data => {
      this.productos = data;
      this.refreshStock();
    });

  }

  refreshStock() {

    this.productos.forEach(producto => {
      this.cart.forEach(elemento => {
        if (producto.id == elemento.producto.id) {
          producto.inventario -= elemento.producto.cantidadSolicitada;
        }
      })
    });

  }

  addToCart(producto: Producto) {

    if (producto.cantidadSolicitada <= producto.inventario) {
      let elemento = new Cart();
      elemento.producto = producto;
      elemento.cantidad = producto.cantidadSolicitada;

      producto.inventario -= producto.cantidadSolicitada;

      this.cart.push(elemento);
    } else {
      alert("No hay suficientes existencias.");
    }

  }

  removeFromCart(index: number) {

    let elemento = this.cart[index];
    this.cart.splice(index, 1);

    let producto = this.productos.find(producto => producto.id == elemento.producto.id);

    if (producto != null && producto != undefined) {
      producto.inventario += Number(elemento.cantidad);
    }

  }

  processOrder() {

    this.pedidoService.enviarPedido(this.cart, this.globalComponent.cliente.id).subscribe({
      next: response => {
        alert("La orden se ha guardado.")
        this.router.navigate(["/orders"]);
      },
      error: err => {
        //document.getElementById("register-error").className = "text-error-show";
        alert("La orden no se pudo guardar.")
      }
    });

  }

}
