import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from '../product/products.component';


@Component({
  selector: 'test',
   templateUrl:'./test.html'
})


export class TestComponent extends ProductsComponent implements OnInit {
 
 constructor()
{
    super();
 }
  productlist: any[];
title: string = 'Featured Products';
ngOnInit()
{
    this.productlist=[
        {
            name:'Print Polo T-Shirt',
            price:18.00,
            percentDiscount:12,
            imageUrl:"assets/images/demo/polo1.jpg",
            pageUrl:"product.html"
    },
            {
            name:'PhosphorusGrey Melange Printed V Neck T-Shirt',
            price:16.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/polo2.jpg",
            pageUrl:"product.html"
    },
            {
            name:'IncultGeo Print Polo T-Shirt',
            price:15.00,
            percentDiscount:12,
            imageUrl:"assets/images/demo/polo3.jpg",
            pageUrl:"product.html"
    },
            {
            name:'WranglerNavy Blue Solid Polo T-Shirt',
            price:16.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/polo4.jpg",
            pageUrl:"product.html"
    },
    {
            name:'PhosphorusGrey Melange Printed V Neck T-Shirt',
            price:13.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/polo3.jpg",
            pageUrl:"product.html"
    }   
    
        
    ];
}

}




