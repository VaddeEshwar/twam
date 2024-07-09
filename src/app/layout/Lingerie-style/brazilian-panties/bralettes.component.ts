import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-lakeproof-view',
    templateUrl: './lakeproof-view.component.html',
    styleUrls: ['./lakeproof-view.component.scss'],
    // animations: [routerTransition()]
})
export class LakeproofviewComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
