import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './controller/cart/cart.component';
import { GlobalComponent } from './controller/global/global.component';
import { LoginComponent } from './controller/login/login.component';
import { RegisterComponent } from './controller/register/register.component';
import { SearchPedidosComponent } from './controller/search-pedidos/search-pedidos.component';
import { LogOutComponent } from './controller/log-out/log-out.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CartComponent,
    SearchPedidosComponent,
    GlobalComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [GlobalComponent]
})
export class AppModule { }
