import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
    selector: 'app-cart-view',
    templateUrl: './cart-view.component.html',
    styleUrls: ['./cart-view.component.scss'],
    // animations: [routerTransition()]
})
export class CartviewComponent implements OnInit {
    formData: any;
    constructor(private route: ActivatedRoute,public router: Router) {
      
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.formData = params;
            console.log('Received data:', this.formData);
        });
        // this.CartDetails()
    }
    placetoorder(){
        this.router.navigate(['product-components/ngx-wizard']);
    }
/////////////////////////////////
getCartDetails:any[]=[];
cartDetails 
    // CartDetails(){
    //     const localCart = localStorage.getItem('localcart');
    //     if (localCart !== null) {
    //         this.getCartDetails = JSON.parse(localCart);
    //         console.log(this.getCartDetails);
    //       }
    // }
    
    gettotalAmount() {
        console.log(this.cartDetails);
        return this.cartDetails.reduce((acc, item) => acc + item.amt * item.qut, 0);
      }
}
