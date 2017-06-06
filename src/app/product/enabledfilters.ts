import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'product-root',
   templateUrl:'./enabledfilters.component.html'
})


export class EnabledFiltersComponent implements OnInit {
 enabledfilters: any[];
title: string = 'Featured Products';
ngOnInit()
{
    this.enabledfilters=[
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




