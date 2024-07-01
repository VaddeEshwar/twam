import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-panties-view',
    templateUrl: './panties-view.component.html',
    styleUrls: ['./panties-view.component.scss'],
    // animations: [routerTransition()]
})
export class PantiesviewComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
