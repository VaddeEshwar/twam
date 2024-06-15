import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-returns-exchanges',
    templateUrl: './returns-exchanges.component.html',
    styleUrls: ['./returns-exchanges.component.scss'],
    // animations: [routerTransition()]
})
export class ReturnsexchangesComponent implements OnInit {
    subtitle: string;
    constructor() {
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
