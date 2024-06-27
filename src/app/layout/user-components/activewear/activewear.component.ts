import { Component, OnInit,inject,TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-activewear',
    templateUrl: './activewear.component.html',
    styleUrls: ['./activewear.component.scss'],
    // animations: [routerTransition()]
})
export class ActivewearComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    disabled = false;
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
     
    openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
    
}
