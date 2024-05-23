import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-bras',
    templateUrl: './bras.component.html',
    styleUrls: ['./bras.component.scss'],
    // animations: [routerTransition()]
})
export class BrasComponent implements OnInit {
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
