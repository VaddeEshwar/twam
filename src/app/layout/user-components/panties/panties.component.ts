import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-panties',
    templateUrl: './panties.component.html',
    styleUrls: ['./panties.component.scss'],
    // animations: [routerTransition()]
})
export class PantiesComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
