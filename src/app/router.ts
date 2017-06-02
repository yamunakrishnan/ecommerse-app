import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './shoppingcart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';



export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
{
        path: 'products',
        component: ProductComponent
},
  {      path: 'cart',
        component: CartComponent
  },
    {    path: 'checkout',
        component: CheckoutComponent
    }
];
@NgModule({
  imports: [ RouterModule.forRoot(routerConfig) ],
  exports: [ RouterModule ]
})
export class AppRouterModule{ }