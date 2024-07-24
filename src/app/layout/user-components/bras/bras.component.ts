import { Component, OnInit,inject,TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent} from '../client-adding/client-adding.component';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bras',
    templateUrl: './bras.component.html',
    styleUrls: ['./bras.component.scss'],
    // animations: [routerTransition()]
    providers: [NgbRatingConfig,
        { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
         ],
})
export class BrasComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    slides = [
        {image: 'assets/images/product/bras-01.webp', text: 'First'},
        {image: 'assets/images/product/bras.webp',text: 'Second'},
        {image: 'assets/images/product/bras-5.webp',text: 'Third'}
     ];
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
  messageText = '';
  imageSrc = '';
  imageButtons = [ {src:'', color: 'image-1'}, {src:'', color: 'image-2'}, 
    {src:'', color: 'image-3'}]
      onClick(imageNameObject) {
        this.imageSrc = imageNameObject.src;
        this.messageText = imageNameObject.color;
      }
    
}
