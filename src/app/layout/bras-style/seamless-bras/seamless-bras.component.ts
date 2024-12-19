import { Component, OnInit, inject, TemplateRef, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../../user-components/client-adding/client-adding.component';
import {BagviewComponent } from '../../product-components/bag/bag-view.component'
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
    selector: 'app-seamless-bras',
    templateUrl: './seamless-bras.component.html',
    styleUrls: ['./seamless-bras.component.scss'],
    // animations: [routerTransition()]
})
export class seamlessbrasComponent implements OnInit {
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;
    noWrapSlides = false;
    showIndicator = true;

    constructor(config: NgbRatingConfig, private modalService: NgbModal, public router: Router) {
        this.price = '799.00';
    }

    ngOnInit() {

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
            title: 'Enamor- SB06 - TMG -  XS non-padded full lace bra',
            images: {
                '#202125': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/001.webp',
                '#d6a583': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/002.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/003.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/004.webp'
            },
            selectedColor: '#202125',
            imageUrl: 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/001.webp',
            price: '599.00',
            oldprice: '700.00',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 2,
            title: 'Triumph-Minimizer seamless-bras 21 N-White',
            images: {
                '#202125': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/002.webp',
                '#d6a583': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/003.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/004.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/001.webp'
            },
            selectedColor: '#d6a583',
            imageUrl: 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/002.webp',
            price: '699.00',
            oldprice: '700.00',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 3,
            title: 'SOIE-A039-SeamlessBra- GRW- 36C ',
            images: {
                '#e8e5e9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/003.webp',
                '#f8f2f9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/004.webp',
                '#202125': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/001.webp',
                '#d6a583': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/002.webp'
            },
            selectedColor: '#e8e5e9',
            imageUrl: 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/003.webp',
            price: '649.00',
            oldprice: '700.00',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
            qut: 1
        },
        {
            prodId: 4,
            title: 'BLOSSOM-NA -N BLUE- 34C',
            images: {
                '#f8f2f9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/004.webp',
                '#202125': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/001.webp',
                '#d6a583': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/002.webp',
                '#e8e5e9': 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/003.webp'
            },
            price: '550.00',
            oldprice: '600.00',
            imageUrl: 'assets/Product/Amante/Bras/SeamlessBra/NonPadded/004.webp',
            selectedColor: '#f8f2f9',
            colors: ['#202125', '#d6a583', '#e8e5e9', '#f8f2f9'],
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
        const AllColor = Object.values(category.colors);
        const selectedImg = category.images[category.selectedColor];
        const cartItem = {
            prodId: category.prodId,
            price: category.price,
            oldprice: category.oldprice,
            title: category.title,
            images: selectedImg,
            allImages: allImages,
            AllColor:AllColor,
            qut: category.qut,
            color: category.selectedColor,
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
            localStorage.setItem('cartItem', JSON.stringify(this.itemCart))
            this.router.navigate(['product-components/brasview'], { state: { cartItem: cartItem } });
        }
    }
    productoverview() {
        const image = this.imageUrl;
        const price = this.price;
    }

}
