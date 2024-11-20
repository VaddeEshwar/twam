import { Component, OnInit,inject,TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent} from '../../user-components/client-adding/client-adding.component';
import { Router } from '@angular/router';
@Component({
    selector: 'app-bandeaubra',
    templateUrl: './bandeaubra.component.html',
    styleUrls: ['./bandeaubra.component.scss'],
    // animations: [routerTransition()]
})
export class BandeaubraComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    selectedColor: string = '#d43743'; 
    colors: string[] = ['#d43743', '#d6a583', '#e8e5e9', '#030509'];
    images:{ [key: string]: string } = {
        '#d43743': 'assets/Product/Amante/Bras/Bandeau/NonPadded/001.webp',
        '#d6a583': 'assets/Product/Amante/Bras/Bandeau/NonPadded/002.webp',
        '#e8e5e9': 'assets/Product/Amante/Bras/Bandeau/NonPadded/003.webp',
        '#030509': 'assets/Product/Amante/Bras/Bandeau/NonPadded/005.webp'
    };
     noWrapSlides = false;
     showIndicator = true;
  
    constructor(config: NgbRatingConfig,private modalService: NgbModal,public router: Router) {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("dashboard");
    }
    ratingcount=0;
    totalrating=0;
    Finalrating:any;
    disabled = false;
    ratingcontrol=new FormControl(0);
    GetRating(){
        this.ratingcount++;
        this.totalrating+=this.ratingcontrol?.value|| 0;
        this.Finalrating=(this.totalrating/this.ratingcount).toFixed(2)
    }
    openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  
    openModal() {
        const modalRef = this.modalService.open(ClientAddingComponent,{windowClass: 'modal-xl modal-rounded'});
        modalRef.componentInstance.modalTitle = 'Left-to-Right Modal';

      }
     
      get imageUrl(): string {
        return this.images[this.selectedColor];
    }
    changeColor(color: string): void {
        this.selectedColor = color;
    }
    dataview(){
        this.router.navigate(['product-components/brasview']);
    }
}
     
    
    

