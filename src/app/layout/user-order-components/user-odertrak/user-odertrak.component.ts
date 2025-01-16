import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { Registration } from '../../../model/Users/registration'
import { AdminserviceService } from '../../../services/user-service/user-service.service';
import { Router } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
import { Country } from '../../../model/Common/Countries';
import { City } from '../../../model/Common/Cities';
import { states } from '../../../model/Common/states'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthGuard } from '../../shared/services/auth.guard';



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
  frm!:FormGroup;

  City: any;
  Country: any;
  constructor(private service: AdminserviceService, private router: Router, private authService: AuthGuard) {
    this.RegistrationForm = new Registration();
    // this.countries = new Country();
  }
  ngOnInit() {
    this.getCountries();
    this.getCity();
  }
  get f(){
    return this.frm.controls;
  }
  onSubmit(): void {
    if (this.RegistrationForm.form.valid) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Please fill in all required fields.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }
    const fromData = this.RegistrationForm.form.value;
    console.log("fromData::" + JSON.stringify(fromData));
    this.service.saveregistration(fromData)
      .subscribe({
        next: (data) => {
          this.activityMsg = "Data saved successfully!";
          this.router.navigate(['product-components/profile']);
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Registration successful!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        },
        error: (e) => console.error(e),
      });
  }
  getCountries() {
    this.service.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data;
        console.log("countries::" + JSON.stringify(this.countries))
      }
    })
  }
  stateId: number;
  getCity() {
    this.service.getAllCity(this.stateId).subscribe({
      next: (data) => {
        this.stateId = data;
        console.log("stateId::" + JSON.stringify(this.stateId))
      }
    })
  }
}
