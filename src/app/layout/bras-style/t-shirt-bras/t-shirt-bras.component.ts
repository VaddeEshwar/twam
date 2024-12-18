import { Component, OnInit, inject, TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../../user-components/client-adding/client-adding.component';
import { Router } from '@angular/router';
@Component({
    selector: 'app-t-shirt-bras',
    templateUrl: './t-shirt-bras.component.html',
    styleUrls: ['./t-shirt-bras.component.scss'],
    // animations: [routerTransition()]
})
export class TshirtbrasComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = 'assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    noWrapSlides = false;
    showIndicator = true;

    constructor(config: NgbRatingConfig, private modalService: NgbModal, public router: Router) {
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

   

    prodExportArray = [
        {
            prodId: 1,
            title: 'Bra-Triumph-T-Shirt Bra 77 NonPadded-RED',
            images: {
                '#f8f2f9': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/001.webp',
                '#202125': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/002.webp',
                '#de8a92': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/003.webp',
                '#f7d9c3': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/004.webp'
            },
            selectedColor: '#f8f2f9',
            imageUrl: 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/001.webp',
            price: '599.00',
            oldprice: '700.00',
            colors: ['#f8f2f9', '#202125', '#de8a92', '#f7d9c3'],
            qut: 1
        },
        {
            prodId: 2,
            title: 'Bra-SOIE-T-Shirt Bra 77 Padded-Neutral Beige',
            images: {
                '#202125': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/002.webp',
                '#f7d9c3': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/003.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/004.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/001.webp'
            },
            selectedColor: '#f7d9c3',
            imageUrl: 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/002.webp',
            price: '699.00',
            oldprice: '700.00',
            colors: ['#202125', '#f7d9c3', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 3,
            title: 'AMANTE-T-Shirt Bra 77 Padded-Maroon ',
            images: {
                '#de8a92': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/003.webp',
                '#202125': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/002.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/001.webp',
                '#f7d9c3': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/004.webp'
            },
            selectedColor: '#de8a92',
            imageUrl: 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/003.webp',
            price: '649.00',
            oldprice: '700.00',
            colors: [ '#de8a92','#202125','#f8f2f9','#f7d9c3'],
            qut: 1
        },
        {
            prodId: 4,
            title: 'BLOSSOM-Minimizer 21 NonPadded-Black',
            images: {
                '#f8f2f9': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/004.webp',
                '#202125': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/002.webp',
                '#d6a583': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/003.webp',
                '#f7d9c3': 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/001.webp'
            },
            price: '550.00',
            oldprice: '600.00',
            imageUrl: 'assets/Product/Amante/Bras/T-Shirt-Bra/Non-Padded/004.webp',
            selectedColor: '#f8f2f9',
            colors: ['#f8f2f9','#202125', '#d6a583', '#f7d9c3', ],
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

    dataview(category) {
         const allImages = Object.values(category.images);
        const selectedImg = category.images[category.selectedColor];
        const cartItem = {
            prodId: category.prodId,
            price: category.price,
            oldprice: category.oldprice,
            title: category.title,
            images: selectedImg,
            allImages: allImages,
            qut: category.qut,
            color:category.selectedColor,
        };
        console.log(cartItem)
        let cartDataNull = localStorage.getItem('cartItem');
        if (cartDataNull == null) {
            let storeDataGet: any = [];
            storeDataGet.push(cartItem);
            localStorage.setItem('cartItem', JSON.stringify(storeDataGet))
        }
        else {
            var id = cartItem.qut;
            let index: number = -1;
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
            this.router.navigate(['product-components/brasview'],{ state: { cartItem: cartItem } });
        }
    }
    productoverview() {
        const image = this.imageUrl;
        const price = this.price;
    }

}
