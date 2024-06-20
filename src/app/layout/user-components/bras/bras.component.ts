import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-bras',
    templateUrl: './bras.component.html',
    styleUrls: ['./bras.component.scss'],
    // animations: [routerTransition()]
    providers: [NgbRatingConfig,
        { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
         ],
})
export class BrasComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    rating = 2;
    price: string;
    slides = [
        {image: 'assets/images/product/bras-01.webp', text: 'First'},
        {image: 'assets/images/product/bras.webp',text: 'Second'},
        {image: 'assets/images/product/bras-5.webp',text: 'Third'}
     ];
     noWrapSlides = false;
     showIndicator = true;
  
    constructor(config: NgbRatingConfig) {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
    }
    ratingcount=0;
    totalrating=0;
    Finalrating:any;

    ratingcontrol=new FormControl(0);
    GetRating(){
        this.ratingcount++;
        this.totalrating+=this.ratingcontrol?.value|| 0;
        this.Finalrating=(this.totalrating/this.ratingcount).toFixed(2)
    }
    
}
