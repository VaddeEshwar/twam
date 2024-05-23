import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-lakeproof',
    templateUrl: './lakeproof.component.html',
    styleUrls: ['./lakeproof.component.scss'],
    // animations: [routerTransition()]
})
export class LakeproofComponent implements OnInit {
    subtitle: string;
    constructor() {
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    
    
}
