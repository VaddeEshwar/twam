import { Component, OnInit,inject,TemplateRef,} from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-panties',
    templateUrl: './panties.component.html',
    styleUrls: ['./panties.component.scss'],
    // animations: [routerTransition()]
})
export class PantiesComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    selectedColor: string = 'sandybrown'; 
    colors = ['sandybrown', 'wheat', 'white', 'black']; 
    images = {
        sandybrown: 'assets/images/product/paintes-2.webp',
        wheat: 'assets/images/product/paintes-2.webp',
        white: 'assets/images/product/paintes-2.webp',
        black: 'assets/images/product/paintes-2.webp'
    };
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
      
    }
     
    openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
    get imageUrl(): string {
        return this.images[this.selectedColor];
    }

    changeColor(color: string): void {
        this.selectedColor = color;
    }
}
