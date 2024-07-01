import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-essentials-view',
    templateUrl: './essentials-view.component.html',
    styleUrls: ['./essentials-view.component.scss'],
    // animations: [routerTransition()]
})
export class EssentialsviewComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    constructor() {
        this.price = '899.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
