import { Component} from '@angular/core';

@Component({
  selector: 'products',
   template:``
})


export class ProductsComponent{
    getSalePrice(price:number, percentDiscount:number){
    return (price/100)*(100-percentDiscount);

}

}



