import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lightlylined-bras',
    templateUrl: './lightlylined-bras.component.html',
    styleUrls: ['./lightlylined-bras.component.scss'],
    // animations: [routerTransition()]
})
export class LightlylinedbrasComponent implements OnInit {
  
    constructor(public router: Router) {
      
    }

    ngOnInit() {
      
    }
    dataview(){
        this.router.navigate(['product-components/brasview']);
    }
}
