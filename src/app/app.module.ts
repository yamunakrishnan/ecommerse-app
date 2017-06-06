import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppRouterModule } from './router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {CaressolComponent} from './home/caressol.component';
import {ProductComponent} from './product/product.component';
import {FilterComponent} from './product/filter.component';
import {ProductListComponent} from './product/productlist.component';
import {NewarrivalComponent} from './home/newarrival.component';
import {BestsellingComponent} from './home/bestselling.component';
import {FeaturedComponent} from './home/featured.component';
import {CollectionComponent} from './home/collection.component';
import {CartComponent} from './shoppingcart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {TestComponent} from './work/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent, 
    CaressolComponent,
    NewarrivalComponent,
    BestsellingComponent,
    FeaturedComponent,
    CollectionComponent,
    TestComponent,
    FilterComponent,
    ProductListComponent
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
