import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './controller/cart/cart.component';
import { LogOutComponent } from './controller/log-out/log-out.component';
import { LoginComponent } from './controller/login/login.component';
import { RegisterComponent } from './controller/register/register.component';
import { SearchPedidosComponent } from './controller/search-pedidos/search-pedidos.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "logout", component: LogOutComponent},
  {path: "orders", component: SearchPedidosComponent},
  {path: "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
