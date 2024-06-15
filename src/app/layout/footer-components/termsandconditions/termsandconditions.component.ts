import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-termsandconditions',
    templateUrl: './termsandconditions.component.html',
    styleUrls: ['./termsandconditions.component.scss'],
    // animations: [routerTransition()]
})
export class TermsandconditionsComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    minValue: number = 100;
    maxValue: number = 400;
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
        
    
}
