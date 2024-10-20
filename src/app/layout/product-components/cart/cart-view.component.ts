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
    }
    placetoorder(){
        this.router.navigate(['product-components/ngx-wizard']);
    }
}
