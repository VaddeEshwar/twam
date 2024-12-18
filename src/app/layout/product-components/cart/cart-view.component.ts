import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthGuard} from '../../shared/services/auth.guard'
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
      deleteItem(index: number): void {
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to remove this item from the cart?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.isConfirmed) {
            this.getCartDetails.splice(index, 1);
            localStorage.setItem('cartItem', JSON.stringify(this.getCartDetails));
            Swal.fire('Deleted!', 'Your item has been removed.', 'success');
          }
        });
      }
      calculateTotal(): number {
        return this.getCartDetails.reduce((total, item) => {
          return total + item.qut * item.price; 
        }, 0); 
      }
/////////////////////////////////
getCartDetails:any[]=[];
cartDetails :any;
    CartDetails(){
        const cartItem = localStorage.getItem('cartItem');
        if (cartItem !== null) {
            this.getCartDetails = JSON.parse(cartItem);
            console.log(this.getCartDetails);
          }
    }
    
    gettotalAmount() {
        console.log(this.cartDetails);
        return this.cartDetails.reduce((acc, item) => acc + item.amt * item.qut, 0);
      }
}
