import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-lakeproof',
    templateUrl: './lakeproof.component.html',
    styleUrls: ['./lakeproof.component.scss'],
    // animations: [routerTransition()]
})
export class LakeproofComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
