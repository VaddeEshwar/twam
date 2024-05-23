import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-panties',
    templateUrl: './panties.component.html',
    styleUrls: ['./panties.component.scss'],
    // animations: [routerTransition()]
})
export class PantiesComponent implements OnInit {
    subtitle: string;
    apiLoaded = false;
    videoId = 'ttYCyRFLklU';
    height = 250;
    width = 465;
    constructor() {
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
