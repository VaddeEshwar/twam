import { Component, OnInit,inject,TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent} from '../../user-components/client-adding/client-adding.component';

@Component({
    selector: 'app-bralettes',
    templateUrl: './bralettes.component.html',
    styleUrls: ['./bralettes.component.scss'],
    // animations: [routerTransition()]
})
export class BralettesComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    selectedColor: string = '#d43743'; 
    colors: string[] = ['#d43743', '#d6a583', '#e8e5e9', '#030509'];
    images:{ [key: string]: string } = {
        '#d43743': 'assets/images/product/plunge-bra1.webp',
        '#d6a583': 'assets/images/product/plunge-bra2.webp',
        '#e8e5e9': 'assets/images/product/plunge-bra3.webp',
        '#030509': 'assets/images/product/plunge-bra4.webp'
    };
     noWrapSlides = false;
     showIndicator = true;
  
    constructor(config: NgbRatingConfig,private modalService: NgbModal) {
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
}
     
    
    

