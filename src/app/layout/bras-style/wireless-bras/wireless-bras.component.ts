import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-bras-view',
    templateUrl: './bras-view.component.html',
    styleUrls: ['./bras-view.component.scss'],
    // animations: [routerTransition()]
})
export class BrasviewComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    minValue: number = 100;
    maxValue: number = 400;
    myThumbnail:string = 'assets/images/product/bras-01.webp';
    myFullresImage:string = 'assets/images/product/bras-01.webp';
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("hello eshwar");
      
    }
     
        
    
}
