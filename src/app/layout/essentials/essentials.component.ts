import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-essentials',
    templateUrl: './essentials.component.html',
    styleUrls: ['./essentials.component.scss'],
    // animations: [routerTransition()]
})
export class EssentialsComponent implements OnInit {
    subtitle: string;
    constructor() {
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
