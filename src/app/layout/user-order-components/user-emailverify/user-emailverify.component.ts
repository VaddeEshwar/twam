import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { routerTransition } from '../../router.animations';
import { AdminserviceService } from '../../../services/user-service/user-service.service'

@Component({
    selector: 'app-user-emailverify',
    templateUrl: './user-emailverify.component.html',
    styleUrls: ['./user-emailverify.component.scss'],
    // animations: [routerTransition()]
})
export class UseremailverifyComponent implements OnInit {
    verificationToken: string = '';

    constructor(private router: ActivatedRoute, private service: AdminserviceService,) {

    }
    ngOnInit() {
        this.router.queryParams.subscribe((params) => {
            this.verificationToken = params['token'];
            this.verifyEmail();
          });
          
    }
    verifyEmail() {
        this.service.postFromRefreshToken().subscribe(
          (response) => {
            console.log('Email verified successfully!');
          },
          (error) => {
            console.error('Verification failed:', error);
          }
        );
      }


}
