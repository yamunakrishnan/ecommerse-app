import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from '../product/products.component';

@Component({
  selector: 'collection',
   templateUrl:'./collection.component.html'
})


export class CollectionComponent extends ProductsComponent implements OnInit {
 constructor(){
     super();
 }

 productlist: any[];
title: string = 'VNeck Collection';
ngOnInit()
{
    this.productlist=[
        {
            name:'PhosphorusGrey Melange Printed V Neck T-Shirt',
            price:16.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/vneck1.jpg",
            pageUrl:"product.html"
    },
            {
            name:'United Colors of BenettonNavy Blue Solid V Neck T Shirt',
            price:13.50,
            percentDiscount:10,
            imageUrl:"assets/images/demo/vneck2.jpg",
            pageUrl:"product.html"
    },
                {
            name:'WranglerBlack V Neck T Shirt',
            price:16.50,
            percentDiscount:10,
            imageUrl:"assets/images/demo/vneck3.jpg",
            pageUrl:"product.html"
    },
                    {
            name:'Tagd New YorkGrey Printed V Neck T-Shirts',
            price:18.00,
            percentDiscount:15,
            imageUrl:"assets/images/demo/vneck4.jpg",
            pageUrl:"product.html"
    },
      {
            name:'PhosphorusGrey Melange Printed V Neck T-Shirt',
            price:13.00,
            percentDiscount:5,
            imageUrl:"assets/images/demo/vneck1.jpg",
            pageUrl:"product.html"
    },
          {
            name:'United Colors of BenettonNavy Blue Solid V Neck T Shirt',
            price:12.00,
            percentDiscount:10,
            imageUrl:"assets/images/demo/vneck2.jpg",
            pageUrl:"product.html"
    }
    ];
}

}

