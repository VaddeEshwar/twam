import { Component, OnInit, inject, TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../client-adding/client-adding.component';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { BrasviewComponent } from '../../product-components/bras-view/bras-view.component'
import { Router } from '@angular/router';

@Component({
    selector: 'app-lakeproof',
    templateUrl: './lakeproof.component.html',
    styleUrls: ['./lakeproof.component.scss'],
    // animations: [routerTransition()]
})
export class LakeproofComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = 'assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    selectedColor: string = 'sandybrown'; 
    colors = ['sandybrown', 'wheat', 'white', 'black']; 
    images = {
        sandybrown: 'assets/images/product/active-wear-3.webp',
        wheat: 'assets/images/product/active-wear-2.webp',
        white: 'assets/images/product/active-wear-1.webp',
        black: 'assets/images/product/active-wear-4.webp'
    };
    noWrapSlides = false;
    showIndicator = true;

    constructor(config: NgbRatingConfig, private modalService: NgbModal,public router: Router) {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
    }
    ratingcount = 0;
    totalrating = 0;
    Finalrating: any;
    disabled = false;
    ratingcontrol = new FormControl(0);
    GetRating() {
        this.ratingcount++;
        this.totalrating += this.ratingcontrol?.value || 0;
        this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2)
    }
    openEnd(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { position: 'end' });
    }

    openModal() {
        const modalRef = this.modalService.open(ClientAddingComponent, { windowClass: 'modal-xl modal-rounded' });
        modalRef.componentInstance.modalTitle = 'Left-to-Right Modal';

    }
    get imageUrl(): string {
        return this.images[this.selectedColor];
    }
    changeColor(color: string): void {
        this.selectedColor = color;
    }
    productoverview(){
        const image = this.imageUrl;
        const price = this.price;
    }
    dataview(){
        this.router.navigate(['product-components/brasview']);
    }
    
}
