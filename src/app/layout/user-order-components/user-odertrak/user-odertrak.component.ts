import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { Registration } from '../../../model/Users/registration'
import { AdminserviceService } from '../../../services/user-service/user-service.service';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { Country } from '../../../model/Common/Countries';
import { City } from '../../../model/Common/Cities';

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
  RegistrationForm: Registration;
  countries: Country[] = [];
  cities: City[] = [];
  City:any;
  Country: any;
  constructor(private service: AdminserviceService, private router: Router) {
    this.RegistrationForm = new Registration();
    // this.countries = new Country();
  }
  ngOnInit() {
    this.getCountries();
    this.getCity();
  }

  onSubmit(): void {
    const fromData = this.RegistrationForm.form.value;
    console.log("fromData::" + JSON.stringify(fromData));
    debugger
    this.service.saveregistration(fromData)
      .subscribe({
        next: (data) => {
          debugger
          this.activityMsg = " data saved successfully!";
          this.router.navigate(['login']);
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
        this.fadeOutActive = false; // reset for next time
      }, 1000); // adjust to match the animation-duration
    }, 2000); // wait 2 seconds before starting the fade-out
  }
  getCountries() {
    this.service.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data;
        console.log("countries::" + JSON.stringify(this.countries))
      }
    })
  }
  getCity() {
    this.service.getAllCity().subscribe({
      next: (data) => {
        this.cities = data;
        console.log("City::" + JSON.stringify(this.cities))
      }
    })
  }
}
