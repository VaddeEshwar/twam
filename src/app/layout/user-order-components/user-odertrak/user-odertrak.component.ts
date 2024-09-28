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
        const formData = this.RegistrationModel.form.value;
        console.log("fromData::" + JSON.stringify(formData));
        this.service.saveregistration(formData)
            .subscribe({
                next: (data) => {
                    this.activityMsg = "Data saved successfully!";
                    this.startFadeOut();
                    console.log(data)
                },
                error: (e) => console.error(e)
            });
    }
    startFadeOut() {
        setTimeout(() => {
            this.fadeOutActive = true;
            setTimeout(() => {
                this.activityMsg = '';
                this.fadeOutActive = false; // reset for next time
            }, 1000); // adjust to match the animation-duration
        }, 2000); // wait 2 seconds before starting the fade-out
    }
    getCountries() {
        this.service.getAllCountries()
            .subscribe({
                next: (data) => {
                    this.countriesData = data;
                    console.log("countriesData::" + JSON.stringify(this.countriesData))
                }
            });
    }
}
