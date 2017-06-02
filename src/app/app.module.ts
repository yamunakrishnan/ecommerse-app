import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppRouterModule } from './router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './shoppingcart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
