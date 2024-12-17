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
    selector: 'app-sports-bras',
    templateUrl: './sports-bras.component.html',
    styleUrls: ['./sports-bras.component.scss'],
    // animations: [routerTransition()]
})
export class SportsbrasComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    selectedColor: string = '#d43743'; 
    colors: string[] = ['#d43743', '#d6a583', '#e8e5e9', '#030509'];
    images:{ [key: string]: string } = {
        '#d43743': 'assets/images/product/strapless-bra-3.webp',
        '#d6a583': 'assets/images/product/strapless-bra-4.webp',
        '#e8e5e9': 'assets/images/product/strapless-bra-1.webp',
        '#030509': 'assets/images/product/strapless-bra-2.webp'
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
    changeColor(color: string): void {
        this.selectedColor = color;
    }
    dataview(){
        this.router.navigate(['product-components/brasview']);
    }
    prodExportArray = [
        {
            prodId: 1,
            title: 'Enamor- Women Wirefree Padded Micro Touch Nylon Elastane Bandeau Bra',
            images: {
                '#89848b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/001.webp',
                '#f0485b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/005.jfif',
                '#030509': 'assets/Product/Amante/Bras/Bandeau/NonPadded/002.webp',
                '#c4a286': 'assets/Product/Amante/Bras/Bandeau/NonPadded/003.webp'
            },
            selectedColor: '#89848b',
            imageUrl: 'assets/Product/Amante/Bras/Bandeau/NonPadded/001.webp',
            price: '599.00',
            oldprice: '700.00',
            colors: ['#89848b', '#f0485b', '#030509', '#c4a286'],
            qut: 1
        },
        {
            prodId: 2,
            title: 'Triumph-Seamless Non Wired Bandeau Bra | A039',
            images: {
                '#89848b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/001.webp',
                '#f0485b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/005.jfif',
                '#030509': 'assets/Product/Amante/Bras/Bandeau/NonPadded/002.webp',
                '#c4a286': 'assets/Product/Amante/Bras/Bandeau/NonPadded/003.webp'
            },
            selectedColor: '#f0485b',
            imageUrl: 'assets/Product/Amante/Bras/Bandeau/NonPadded/005.jfif',
            price: '699.00',
            oldprice: '700.00',
            colors: [ '#f0485b', '#030509','#89848b', '#c4a286'],
            qut: 1
        },
        {
            prodId: 3,
            title: 'SOIE-Lace Bandeau Bra Strapless Bras for Women Wireless Padded Bandeau Bralette Push Up Tube Top Bra',
            images: {
                '#89848b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/001.webp',
                '#f0485b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/005.jfif',
                '#030509': 'assets/Product/Amante/Bras/Bandeau/NonPadded/002.webp',
                '#c4a286': 'assets/Product/Amante/Bras/Bandeau/NonPadded/003.webp'
            },
            selectedColor: '#030509',
            imageUrl: 'assets/Product/Amante/Bras/Bandeau/NonPadded/002.webp',
            price: '649.00',
            oldprice: '700.00',
            colors: [ '#030509', '#89848b', '#f0485b','#c4a286'],
            qut: 1
        },
        {
            prodId: 4,
            title: 'BLOSSOM-Perfect Bandeau Coverage Supima Cotton T-Shirt Bra | A039',
            images: {
                '#89848b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/001.webp',
                '#f0485b': 'assets/Product/Amante/Bras/Bandeau/NonPadded/005.jfif',
                '#030509': 'assets/Product/Amante/Bras/Bandeau/NonPadded/002.webp',
                '#c4a286': 'assets/Product/Amante/Bras/Bandeau/NonPadded/003.webp'
            },
            price: '550.00',
            oldprice: '600.00',
            imageUrl: 'assets/Product/Amante/Bras/Bandeau/NonPadded/003.webp',
            selectedColor: '#c4a286',
            colors: ['#c4a286','#89848b', '#f0485b', '#030509'],
            qut: 1
        },
    ]
    imageUrl: string = '';
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

    // dataview(category) {
    //      const allImages = Object.values(category.images);
    //     const selectedImg = category.images[category.selectedColor];
    //     const cartItem = {
    //         prodId: category.prodId,
    //         price: category.price,
    //         oldprice: category.oldprice,
    //         title: category.title,
    //         images: selectedImg,
    //         allImages: allImages,
    //         qut: category.qut,
    //         color:category.selectedColor,
    //     };
    //     console.log(cartItem)
    //     let cartDataNull = localStorage.getItem('localcart');
    //     if (cartDataNull == null) {
    //         let storeDataGet: any = [];
    //         storeDataGet.push(cartItem);
    //         localStorage.setItem('localcart', JSON.stringify(storeDataGet))
    //     }
    //     else {
    //         var id = cartItem.qut;
    //         let index: number = -1;
    //         for (let i = 0; i < this.itemCart.length; i++) {
    //             if (parseInt(id) === parseInt(this.itemCart[i].prodId)) {
    //                 this.itemCart[i].qut = cartItem.qut;
    //                 index = i;
    //                 break;
    //             }
    //         }
    //         if (index == -1) {
    //             this.itemCart.push(cartItem);
    //         }
    //         localStorage.setItem('localcart', JSON.stringify(this.itemCart))
    //         this.router.navigate(['product-components/brasview'],{ state: { cartItem: cartItem } });
    //     }
    // }
    productoverview() {
        const image = this.imageUrl;
        const price = this.price;
    }

}
