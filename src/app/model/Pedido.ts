import { Cart } from "./Cart";

export class Pedido
{
  id: number;
  cliente: number;
  fecha: Date;
  estado: string;
  productoPedido: Cart[];
}
