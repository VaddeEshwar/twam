import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.scss'],
    // animations: [routerTransition()]
})
export class FaqsComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    title: string;
    price: string;
    constructor() {
        this.price = '799.00';
        this.title = 'Swim Wear';
    }
    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
