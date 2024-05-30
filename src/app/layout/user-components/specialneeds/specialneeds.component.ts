import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-specialneeds',
    templateUrl: './specialneeds.component.html',
    styleUrls: ['./specialneeds.component.scss'],
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
