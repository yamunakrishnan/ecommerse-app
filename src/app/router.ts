import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './shoppingcart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import{TestComponent} from './work/test.component';



export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
      {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'   
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
    },
    {
        path: 'work',
        component: TestComponent
}
];
@NgModule({
  imports: [ RouterModule.forRoot(routerConfig) ],
  exports: [ RouterModule ]
})
export class AppRouterModule{ }