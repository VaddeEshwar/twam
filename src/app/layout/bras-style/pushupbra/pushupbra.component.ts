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
    selector: 'app-pushupbra',
    templateUrl: './pushupbra.component.html',
    styleUrls: ['./pushupbra.component.scss'],
    // animations: [routerTransition()]
})
export class PushupbraComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    selectedColor: string = '#d43743'; 
    colors: string[] = ['#d43743', '#d6a583', '#e8e5e9', '#030509'];
    images:{ [key: string]: string } = {
        '#d43743': 'assets/Product/Amante/Bras/PushupBra/NonPadded/001.webp',
        '#d6a583': 'assets/Product/Amante/Bras/PushupBra/NonPadded/002.webp',
        '#e8e5e9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/003webp',
        '#030509': 'assets/Product/Amante/Bras/PushupBra/NonPadded/004.webp'
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
  


    prodExportArray = [
        {
            prodId: 1,
            title: 'AMANTE - Push up Bra Heavy Padded Underwired Designer Bra',
            images: {
                '#202125': 'assets/Product/Amante/Bras/PushupBra/NonPadded/001.webp',
                '#d6a583': 'assets/Product/Amante/Bras/PushupBra/NonPadded/002.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/003.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/004.webp'
            },
            selectedColor: '#202125',
            imageUrl: 'assets/Product/Amante/Bras/PushupBra/NonPadded/001.webp',
            price: '599.00',
            oldprice: '700.00',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 2,
            title: 'BLOSSOM-Push up Bra Heavy Padded Underwired Designer Bra for Women and Girls| A039',
            images: {
                '#202125': 'assets/Product/Amante/Bras/PushupBra/NonPadded/002.webp',
                '#d6a583': 'assets/Product/Amante/Bras/PushupBra/NonPadded/003.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/004.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/001.webp'
            },
            selectedColor: '#d6a583',
            imageUrl: 'assets/Product/Amante/Bras/PushupBra/NonPadded/002.webp',
            price: '699.00',
            oldprice: '700.00',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 3,
            title: 'ENAMOR-Women s Push Up Bra Front Fastening Bras | A039',
            images: {
                '#e8e5e9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/003.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/004.webp',
                '#202125': 'assets/Product/Amante/Bras/PushupBra/NonPadded/001.webp',
                '#d6a583': 'assets/Product/Amante/Bras/PushupBra/NonPadded/002.webp'
            },
            selectedColor: '#e8e5e9',
            imageUrl: 'assets/Product/Amante/Bras/PushupBra/NonPadded/003.webp',
            price: '649.00',
            oldprice: '700.00',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 4,
            title: 'Triumph-Women s Essentiel Fit 3D Spacer Plunge Bra | A039',
            images: {
                '#f8f2f9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/004.webp',
                '#202125': 'assets/Product/Amante/Bras/PushupBra/NonPadded/001.webp',
                '#d6a583': 'assets/Product/Amante/Bras/PushupBra/NonPadded/002.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/PushupBra/NonPadded/003.webp'
            },
            price: '550.00',
            oldprice: '600.00',
            imageUrl: 'assets/Product/Amante/Bras/PushupBra/NonPadded/004.webp',
            selectedColor: '#f8f2f9',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
    ]
    // imageUrl: string = '';
    itemCart: any = []
    selectColor(productId: number, color: string): void {
        const product = this.prodExportArray.find(p => p.prodId === productId);
        if (product) {
            const colorKey = Object.keys(product.images).find(
                key => key.toLowerCase() === color.toLowerCase()
            );
            if (colorKey) {
                product.imageUrl = product.images[colorKey];
            }
        }
    }

    dataview(category) {
        const selectedImg = category.images[category.selectedColor];
        const cartItem = {
            prodId: category.prodId,
            price: category.price,
            oldprice: category.oldprice,
            title: category.title,
            images: selectedImg,
            qut: category.qut,
        };
        console.log(cartItem)
        let cartDataNull = localStorage.getItem('localcart');
        if (cartDataNull == null) {
            let storeDataGet: any = [];
            storeDataGet.push(cartItem);
            localStorage.setItem('localcart', JSON.stringify(storeDataGet))
        }
        else {
            var id = cartItem.qut;
            let index: number = -1;
            // this.itemCart = JSON.parse(localStorage.setItem('localcart')); 
            for (let i = 0; i < this.itemCart.length; i++) {
                if (parseInt(id) === parseInt(this.itemCart[i].prodId)) {
                    this.itemCart[i].qut = cartItem.qut;
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                this.itemCart.push(cartItem);
            }
            localStorage.setItem('localcart', JSON.stringify(this.itemCart))
            this.router.navigate(['product-components/brasview']);
        }
    }
    productoverview() {
        const image = this.imageUrl;
        const price = this.price;
    }
}
     
    
    

