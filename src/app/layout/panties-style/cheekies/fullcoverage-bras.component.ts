import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-activewear-view',
    templateUrl: './activewear-view.component.html',
    styleUrls: ['./activewear-view.component.scss'],
    // animations: [routerTransition()]
})
export class ActivewearviewComponent implements OnInit {
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
