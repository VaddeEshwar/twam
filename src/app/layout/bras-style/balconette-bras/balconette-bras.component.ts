
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
    selector: 'app-balconette-bras',
    templateUrl: './balconette-bras.component.html',
    styleUrls: ['./balconette-bras.component.scss'],
    // animations: [routerTransition()]
})
export class BalconettebrasComponent implements OnInit {
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
            title: 'Amante - soft wireless non-padded full lace bra',
            images: {
                '#d43743': 'assets/images/product/w-bra3.webp',
                '#d6a583': 'assets/images/product/w-bra1.webp',
                '#e8e5e9': 'assets/images/product/w-bra2.webp',
                '#cbad9e': 'assets/images/product/w-bra.webp'
            },
            selectedColor: '#d43743',
            imageUrl: 'assets/images/product/w-bra.webp',
            price: '580.00',
            oldprice: '700.00',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1
        },
        {
            prodId: 2,
            title: 'Blossom-Perfect Coverage Supima Cotton T-Shirt Bra | A039',
            images: {
                '#d43743': 'assets/images/product/w-bra2.webp',
                '#d6a583': 'assets/images/product/w-bra1.webp',
                '#e8e5e9': 'assets/images/product/w-bra2.webp',
                '#cbad9e': 'assets/images/product/w-bra.webp'
            },
            selectedColor: '#d6a583',
            imageUrl: 'assets/images/product/w-bra1.webp',
            price: '600.00',
            oldprice: '700.00',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1
        },
        {
            prodId: 3,
            title: 'Soie-Perfect Coverage Supima Cotton T-Shirt Bra | A039 ',
            images: {
                '#d43743': 'assets/images/product/w-bra.webp',
                '#d6a583': 'assets/images/product/w-bra1.webp',
                '#e8e5e9': 'assets/images/product/w-bra2.webp',
                '#cbad9e': 'assets/images/product/w-bra.webp'
            },
            selectedColor: '#e8e5e9',
            imageUrl: 'assets/images/product/w-bra2.webp',
            price: '620.00',
            oldprice: '700.00',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1
        },
        {
            prodId: 4,
            title: 'Trimuph-Perfect Coverage Supima Cotton T-Shirt Bra | A039',
            images: {
                '#d43743': 'assets/images/product/w-bra1.webp',
                '#d6a583': 'assets/images/product/w-bra1.webp',
                '#e8e5e9': 'assets/images/product/w-bra2.webp',
                '#cbad9e': 'assets/images/product/w-bra.webp'
            },
            price: '500.00',
            oldprice: '600.00',
            imageUrl: 'assets/images/product/w-bra3.webp',
            selectedColor: '#cbad9e',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
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
        alert(category.images)
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
        let cartDataNull = localStorage.getItem('localcart');
        if (cartDataNull == null) {
            let storeDataGet: any = [];
            storeDataGet.push(cartItem);
            localStorage.setItem('localcart', JSON.stringify(storeDataGet))
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
            this.router.navigate(['product-components/brasview'], { state: { cartItem: cartItem } });
        }
    }
    productoverview() {
        const image = this.imageUrl;
        const price = this.price;
    }
}
