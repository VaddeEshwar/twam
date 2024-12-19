import { Component, OnInit, inject, TemplateRef, Input, } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../../user-components/client-adding/client-adding.component';
import { Router } from '@angular/router';
@Component({
    selector: 'app-straplessbra',
    templateUrl: './straplessbra.component.html',
    styleUrls: ['./straplessbra.component.scss'],
    // animations: [routerTransition()]
})
export class StraplessbraComponent implements OnInit {
    @Input() filteredProducts:any[]=[];
    
    private offcanvasService = inject(NgbOffcanvas);
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    active = 1;
    rating = 2;
    price: string;

    noWrapSlides = false;
    showIndicator = true;
    filterProduct: any[] = [];
    constructor(config: NgbRatingConfig, private modalService: NgbModal, public router: Router) {
        this.price = '799.00';
        this.filterProduct = this.prodExportArray;
    }

    ngOnInit() {
        console.log("dashboard");
        console.log("Filtered Products:", this.filteredProducts);
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
                '#d43743': 'assets/images/product/strapless-bra-1.webp',
                '#d6a583': 'assets/images/product/strapless-bra-2.webp',
                '#e8e5e9': 'assets/images/product/strapless-bra-3.webp',
                '#cbad9e': 'assets/images/product/strapless-bra-4.webp'
            },
            selectedColor: '#d43743',
            imageUrl: 'assets/images/product/strapless-bra-1.webp',
            price: '580.00',
            oldprice: '700.00',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1,
            brand: 'Amante',
            size: 'X',
            Bra_size: '32A'
        },
        {
            prodId: 2,
            title: 'Blossom-Perfect Coverage Supima Cotton T-Shirt Bra | A039',
            images: {
                '#d43743': 'assets/images/product/strapless-bra-2.webp',
                '#d6a583': 'assets/images/product/strapless-bra-3.webp',
                '#e8e5e9': 'assets/images/product/strapless-bra-4.webp',
                '#cbad9e': 'assets/images/product/strapless-bra-1.webp'
            },
            selectedColor: '#d6a583',
            imageUrl: 'assets/images/product/strapless-bra-2.webp',
            price: '600.00',
            oldprice: '700.00',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1,
            brand: 'Blossom',
            size: 'M',
            Bra_size: '32A'
        },
        {
            prodId: 3,
            title: 'Soie-Perfect Coverage Supima Cotton T-Shirt Bra | A039 ',
            images: {
                '#d43743': 'assets/images/product/strapless-bra-3.webp',
                '#d6a583': 'assets/images/product/strapless-bra-4.webp',
                '#e8e5e9': 'assets/images/product/strapless-bra-1.webp',
                '#cbad9e': 'assets/images/product/strapless-bra-2.webp'
            },
            selectedColor: '#e8e5e9',
            imageUrl: 'assets/images/product/strapless-bra-3.webp',
            price: '620.00',
            oldprice: '700.00',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1,
            brand: 'Soie',
            size: 'M',
            Bra_size: '32B'
        },
        {
            prodId: 4,
            title: 'Trimuph-Perfect Coverage Supima Cotton T-Shirt Bra | A039',
            images: {
                '#d43743': 'assets/images/product/strapless-bra-4.webp',
                '#d6a583': 'assets/images/product/strapless-bra-1.webp',
                '#e8e5e9': 'assets/images/product/strapless-bra-2.webp',
                '#cbad9e': 'assets/images/product/strapless-bra-3.webp'
            },
            price: '500.00',
            oldprice: '600.00',
            imageUrl: 'assets/images/product/strapless-bra-4.webp',
            selectedColor: '#cbad9e',
            colors: ['#d43743', '#d6a583', '#e8e5e9', '#cbad9e'],
            qut: 1,
            brand: 'Trimuph',
            size: 'L',
            Bra_size: '32A',
            
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
        const selectedImg = category.images[category.selectedColor];
        const cartItem = {
            prodId: category.prodId,
            price: category.price,
            oldprice: category.oldprice,
            title: category.title,
            images: selectedImg,
            qut: category.qut,
            brand:category.brand,
            size:category.size,
            Bra_size:category.Bra_size,
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




