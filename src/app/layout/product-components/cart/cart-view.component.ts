import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthGuard} from '../../shared/services/auth.guard'
@Component({
    selector: 'app-cart-view',
    templateUrl: './cart-view.component.html',
    styleUrls: ['./cart-view.component.scss'],
    // animations: [routerTransition()]
})
export class CartviewComponent implements OnInit {
    formData: any;
    constructor(private route: ActivatedRoute,public router: Router,private authService: AuthGuard) {
      
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.formData = params;
            console.log('Received data:', this.formData);
        });
        this.CartDetails()
    }
    // placeOrder(){
    //     this.router.navigate(['product-components/registration']);
    // }
    placeOrder() {
        if (this.authService.isLoggedIn()) {
          if (this.authService.isFirstTimeLogin()) {
            this.router.navigate(['product-components/registration']);
            this.authService.setFirstTimeLogin(); 
          } else {
            this.router.navigate(['/payment']);
          }
        } else {
          this.router.navigate(['/signin']);
        }
      }

/////////////////////////////////
getCartDetails:any[]=[];
cartDetails :any;
    CartDetails(){
        const localCart = localStorage.getItem('localcart');
        if (localCart !== null) {
            this.getCartDetails = JSON.parse(localCart);
            console.log(this.getCartDetails);
          }
    }
    
    gettotalAmount() {
        console.log(this.cartDetails);
        return this.cartDetails.reduce((acc, item) => acc + item.amt * item.qut, 0);
      }
}
