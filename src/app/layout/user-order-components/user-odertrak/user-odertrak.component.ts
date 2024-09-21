import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { Registration } from '../../../model/Users/registration'
import { AdminserviceService } from '../../../services/user-service/user-service.service';
import { Router } from '@angular/router';
import { Form } from '@angular/forms'
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
    UserRegistrationForm: Registration;
    constructor(private service: AdminserviceService, private router: Router) {
        this.UserRegistrationForm = new Registration();
    }
    ngOnInit() {


    }

    onSubmit(): void {
        const formData = this.UserRegistrationForm.form.value;
        console.log("fromData::" + JSON.stringify(formData));
        this.service.saveregistration(formData)
            .subscribe({
                next: (data) => {
                    this.activityMsg = "Data saved successfully!";
                    this.router.navigate(['login']);
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

}
