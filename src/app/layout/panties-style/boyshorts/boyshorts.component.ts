import { Component, OnInit,inject,TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent} from '../../user-components/client-adding/client-adding.component';
import { Router } from '@angular/router'
@Component({
    selector: 'app-boyshorts',
    templateUrl: './boyshorts.component.html',
    styleUrls: ['./boyshorts.component.scss'],
    // animations: [routerTransition()]
})
export class BoyshortsComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    selectedColor: string = '#d43743'; 
    colors: string[] = ['#d43743', '#d6a583', '#e8e5e9', '#030509'];
    images:{ [key: string]: string } = {
        '#d43743': 'assets/images/product/boyshorts-panty-3.webp',
        '#d6a583': 'assets/images/product/boyshorts-panty-1.webp',
        '#e8e5e9': 'assets/images/product/boyshorts-panty-4.webp',
        '#030509': 'assets/images/product/boyshorts-panty-2.webp'
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
    // dataview(){
    //     this.router.navigate(['product-components/brasview']);
    // }
    prodExportArray = [
        {
            prodId: 1,
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
            title: 'Perfect Coverage Supima Cotton T-Shirt Bra | A036',
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
            title: 'Perfect Coverage Supima Cotton T-Shirt Bra | A037',
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
            qut:1
        },
        {
            prodId: 4,
            title: 'Perfect Coverage Supima Cotton T-Shirt Bra | A035',
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
    itemCart:any=[]
    dataview(category) {
        const selectedImg = category.images[category.selectedColor];
        const cartItem = {
            prodId: category.prodId,
            price: category.price,
            oldprice: category.oldprice,
            title: category.title,
            images: selectedImg,
            qut:category.qut,
        };
        console.log(cartItem)
        let cartDataNull = localStorage.getItem('localcart');
        if (cartDataNull == null) {
            let storeDataGet: any = [];
            storeDataGet.push(cartItem);
            localStorage.setItem('localcart', JSON.stringify(storeDataGet))
        }
        else{
            var id = cartItem.qut;
            let index:number= -1;
            // this.itemCart = JSON.parse(localStorage.setItem('localcart')); 
            for(let i=0;i<this.itemCart.length;i++){
              if(parseInt(id)===parseInt(this.itemCart[i].prodId)){
                this.itemCart[i].qut = cartItem.qut;
                index = i;
                break;  
              }
            }
            if(index== -1){
              this.itemCart.push(cartItem);
            }
            localStorage.setItem('localcart',JSON.stringify(this.itemCart))
            this.router.navigate(['product-components/brasview']);
          }
    }
    }
     
        
    

