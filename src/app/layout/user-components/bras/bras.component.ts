import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
    selector: 'app-bras',
    templateUrl: './bras.component.html',
    styleUrls: ['./bras.component.scss'],
    // animations: [routerTransition()]
    providers: [
        { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
     ],
})
export class BrasComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    slides = [
        {image: 'assets/images/product/bras-01.webp', text: 'First'},
        {image: 'assets/images/product/bras.webp',text: 'Second'},
        {image: 'assets/images/product/bras-5.webp',text: 'Third'}
     ];
     noWrapSlides = false;
     showIndicator = true;
  
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
        
    
}
