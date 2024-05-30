import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-activewear',
    templateUrl: './activewear.component.html',
    styleUrls: ['./activewear.component.scss'],
    // animations: [routerTransition()]
})
export class ActivewearComponent implements OnInit {
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
