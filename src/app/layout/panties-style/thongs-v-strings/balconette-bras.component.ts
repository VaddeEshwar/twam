import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-specialneeds-view',
    templateUrl: './specialneeds-view.component.html',
    styleUrls: ['./specialneeds-view.component.scss'],
    // animations: [routerTransition()]
})
export class SpecialneedsComponent implements OnInit {
    subtitle: string;
    constructor() {
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
