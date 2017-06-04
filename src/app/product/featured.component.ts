import { Component,OnInit } from '@angular/core';
import {ProductsComponent} from '../product/products.component';

@Component({
  selector: 'featured',
   templateUrl: './featured.component.html'
})


export class FeaturedComponent extends ProductsComponent implements OnInit {

constructor(){
    super();
}

productlist: any[];
title: string = 'Featured Products'

ngOnInit()
{
    this.productlist=[
        {
            name:'IncultGeo Print Polo T-Shirt',
            price:15.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/polo1.jpg",
            pageUrl:"product.html"
    },
    {
            name:'Tommy HilfigerNavy Blue Printed Polo T-Shirt',
            price:17.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/polo2.jpg",
            pageUrl:"product.html"
    },
        {
            name:'WranglerNavy Blue Solid Polo T-Shirt',
            price:23.00,
            percentDiscount:12,
            imageUrl:"assets/images/demo/polo3.jpg",
            pageUrl:"product.html"
    },
            {
            name:'NikeAs Matchup -Pq Grey Polo T-Shirt',
            price:18.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/polo4.jpg",
            pageUrl:"product.html"
    }
        
    ];
}

}



         
