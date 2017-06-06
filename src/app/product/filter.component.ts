import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'filters',
   templateUrl:'./filter.component.html'
})


export class FilterComponent implements OnInit {

filterlist:any[];

ngOnInit()
{
    this.filterlist=[
        {name:'T-Shirts(10)'},
        {name:'Polo-Shirts(11)'}
    ];
}
}

