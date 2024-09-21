import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { Registration } from '../../../model/Users/registration'
import { AdminserviceService } from '../../../services/user-service/user-service.service'
import { Form } from '@angular/forms'
import { Router } from '@angular/router';
import { error } from 'jquery';
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    // animations: [routerTransition()]
})
export class UserprofileComponent implements OnInit {
    subtitle: string;
    apiLoaded = false;
    UserRegistrationForm: Registration;
    height = 250;
    width = 465;
    active = 1;
    activev= "2";
    activityMsg: string='';
    fadeOutActive = false;

      //////// service calling and send data & get data////////////
    constructor(private service:AdminserviceService,private router: Router) {
        this.UserRegistrationForm = new Registration(); 
    }

    ngOnInit() {}
     
    onSubmit(): void {
        const formData = this.UserRegistrationForm.form.value;
          console.log("fromData::"+JSON.stringify(formData));
        this.service.saveregistration(formData)
        .subscribe({
          next: (data) => {
            this.activityMsg="Data saved successfully!";
            this.startFadeOut();
            console.log(data)
            
          },
          error: (e) => console.error(e),
      
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
