import { Component, OnInit,inject,TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-lakeproof',
    templateUrl: './lakeproof.component.html',
    styleUrls: ['./lakeproof.component.scss'],
    // animations: [routerTransition()]
})
export class LakeproofComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
    
}
