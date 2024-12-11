import { Component, OnInit, inject, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../client-adding/client-adding.component';
import { Product } from '../../../model/products'
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { shoppning} from '../../../model/shopping-add';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
    showNavigationArrows = false;
	showNavigationIndicators = false;
	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    @ViewChild('carousel', { static: true }) carousel: NgbCarousel = Object.create(null);
    modalRef: BsModalRef;
    subtitle: string;
    apiLoaded = false;
    price: string;
    oldprice:string;
    image1: string = 'assets/images/ourbrand/002.webp';
    image2: string = 'assets/images/ourbrand/004.webp';
    shoppningModel:shoppning;    
    shoppningForm:shoppning;
    images = [1,2,3,4,5].map((n) => `assets/images/background/${n}.webp`);
    private offcanvasService = inject(NgbOffcanvas);
    constructor(private modalService: NgbModal,public router: Router,config: NgbCarouselConfig) {
        this.subtitle = "Triaction Hybrid Lite P-BLACK";
        this.price = '799.00';
        this.oldprice='659.00'
        this.shoppningForm = new shoppning();
        this.shoppningModel = new shoppning();

        config.interval = 10000;
		config.keyboard = false;
		config.showNavigationArrows = false;
		config.showNavigationIndicators = true;
    }

    ngOnInit() {
        console.log("Hello Eshwar this working please reslove header");
        const swiper4El = document.querySelector(".mySwiper4") as HTMLElement;

        if (swiper4El) {
          Object.assign(swiper4El, {
            grabCursor: true,
            effect: "creative",
            creativeEffect: {
              prev: {
                shadow: true,
                translate: [0, 0, -800],
                rotate: [180, 0, 0],
              },
              next: {
                shadow: true,
                translate: [0, 0, -800],
                rotate: [-180, 0, 0],
              },
            },
          });
        
          (swiper4El as any).initialize();
        }
    }

    openModal() {
        const modalRef = this.modalService.open(ClientAddingComponent, { windowClass: 'modal-xl modal-rounded' });
        modalRef.componentInstance.modalTitle = 'Left-to-Right Modal';
        modalRef.componentInstance.subtitle = this.subtitle;
        modalRef.componentInstance.price = this.price;
        modalRef.componentInstance.image = this.image1;
    }
    ratingcount = 0;
    totalrating = 0;
    Finalrating: any;
    ratingcontrol = new FormControl(0);
    GetRating() {
        this.ratingcount++;
        this.totalrating += this.ratingcontrol?.value || 0;
        this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2)
    }
    openEnd(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { position: 'end' });
    }

    // modal Open Vertically Centered
    modalOpenVC(modalCenter: any) {
        this.modalService.open(modalCenter, {
            centered: true,
        });
    }
    onSubmit( modalCenter: any): void {
        const fromData = this.shoppningModel.form.value;
        alert("hello")
        console.log('datatat::eshwar' + JSON.stringify(fromData));
        this.router.navigate(['product-components/cart'], { queryParams: fromData });
        this.modalService.open(modalCenter, {
            centered: true,
        });
      }

      prodExportArray = [
        {
            prodId: 1,
            brand:'Triumph',
            title: 'Perfect Coverage Supima Cotton T-Shirt Bra | A039',
            images: {
                sandybrown: 'assets/images/product/bras-01.webp',
                wheat: 'assets/images/product/bras.webp',
                white: 'assets/images/product/bras-2.webp',
                black: 'assets/images/product/bras-03.webp'
            },
            selectedImg: 'sandybrown',
            price: '580.00',
            oldprice: '700.00',
            colors: ['sandybrown', 'wheat', 'white', 'black'],
            selectedColor: 'sandybrown',
            qut:1
        },
        {
            prodId: 2,
            brand:'Enamor',
            title: 'FB12-BRA-NPNW-P1, BUFF, 42C',
            images: {
                sandybrown: 'assets/images/product/bras-01.webp',
                wheat: 'assets/images/product/bras.webp',
                white: 'assets/images/product/bras-2.webp',
                black: 'assets/images/product/bras-03.webp'
            },
            selectedImg: 'sandybrown',
            price: '600.00',
            oldprice: '700.00',
            colors: ['sandybrown', 'wheat', 'white', 'black'],
            selectedColor: 'sandybrown',
            qut:1
        },
        {
            prodId: 3,
            brand:'Amante',
            title: 'Sandalwood_32B',
            images: {
                sandybrown: 'assets/images/product/bras-01.webp',
                wheat: 'assets/images/product/bras.webp',
                white: 'assets/images/product/bras-2.webp',
                black: 'assets/images/product/bras-03.webp'
            },
            selectedImg: 'sandybrown',
            price: '620.00',
            oldprice: '700.00',
            colors: ['sandybrown', 'wheat', 'white', 'black'],
            selectedColor: 'sandybrown',
            qut:1,
        },
        {
            prodId: 4,
            brand:'Blossom',
            title: 'BRA-BLOSSOM-NA-MIXED-34C',
            images: {
                sandybrown: 'assets/images/product/bras-01.webp',
                wheat: 'assets/images/product/bras.webp',
                white: 'assets/images/product/bras-2.webp',
                black: 'assets/images/product/bras-03.webp'
            },
            selectedImg: 'sandybrown',
            price: '500.00',
            oldprice: '600.00',
            colors: ['sandybrown', 'wheat', 'white', 'black'],
            selectedColor: 'sandybrown',
            qut:1
        },
        {
            prodId: 5,
            brand:'SOIE',
            title: 'BRA-SOIE-CB-132-BARK-32B',
            images: {
                sandybrown: 'assets/images/product/bras-01.webp',
                wheat: 'assets/images/product/bras.webp',
                white: 'assets/images/product/bras-2.webp',
                black: 'assets/images/product/bras-03.webp'
            },
            selectedImg: 'sandybrown',
            price: '500.00',
            oldprice: '600.00',
            colors: ['sandybrown', 'wheat', 'white', 'black'],
            selectedColor: 'sandybrown',
            qut:1
        },
    ]
   

    
      togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}
      onSlide(slideEvent: NgbSlideEvent) {
		if (this.unpauseOnArrow && slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
    private swiper4El: HTMLElement | null = null;
   
}
