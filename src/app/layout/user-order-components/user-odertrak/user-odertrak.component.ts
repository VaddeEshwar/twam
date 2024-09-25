import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { Registration } from '../../../model/Users/registration'
import { AdminserviceService } from '../../../services/user-service/user-service.service';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { Country } from '../../../model/Common/Countries'
@Component({
    selector: 'app-user-odertrak',
    templateUrl: './user-odertrak.component.html',
    styleUrls: ['./user-odertrak.component.scss'],
    // animations: [routerTransition()]
})
export class UserordertrakComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    title: string;
    price: string;
    active = 1;
    activityMsg: string = '';
    fadeOutActive = false;
    RegistrationModel: Registration;
    countriesData: any[] = [];
    constructor(private service: AdminserviceService, private router: Router) {
        this.RegistrationModel = new Registration();
    }
    ngOnInit() {
        this.getCountries();
    }

    onSubmit(): void {
        const fromData = this.RegistrationModel.form.value;
        console.log("fromData::" + JSON.stringify(fromData));
        this.service.saveregistration(fromData).subscribe
            ({
                next: (data) => {
                    this.activityMsg = "registration data saved successfully!";
                    this.startFadeOut();
                },
                error: (e) => console.error(e)
            });
    }
    startFadeOut() {
        setTimeout(() => {
            this.fadeOutActive = true;
            setTimeout(() => {
                this.activityMsg = '';
                this.fadeOutActive = false;
            }, 1000);
        }, 2000);
    }
    getCountries(){
        this.service.getAllCountries()
          .subscribe({
            next: (data) => {   
              this.countriesData = data;   
              console.log("countriesData::"+ JSON.stringify(this.countriesData))
            }
        });
      }
}
