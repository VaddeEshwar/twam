import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminserviceService } from '../../../services/user-service/user-service.service';
import { UpdateuserRequest } from '../../../model/Users/UpdateuserRequest';
import { Country } from '../../../model/Common/Countries'
import { Router } from '@angular/router';
import { Form } from '@angular/forms'
@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss'],
  providers: [NgbActiveModal, NgbModal,]
})
export class UseraddressComponent implements OnInit {

  subtitle: string;
  updateaddress: UpdateuserRequest;
  activityMsg: string = '';
  fadeOutActive = false;
  active = 1;
  countries: Country[] = [];
  constructor(private service: AdminserviceService, private router: Router) {
    this.updateaddress = new UpdateuserRequest();
    
  }

  ngOnInit(): void {
    this.getCountries();
  }

  onSubmit(): void {
    if (this.updateaddress.form.valid) {
      const formData = this.updateaddress.getFormData();
      this.service.SaveupdateAdd(formData)
        .subscribe({
          next: (data) => {
            this.activityMsg = "Data saved successfully!";
            this.router.navigate(['login']);
            this.startFadeOut();
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    } else {
      console.log('Form is invalid', this.updateaddress.form);
    }
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
    debugger
    this.service.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data;
        alert('countries')
        console.log("countries::" + JSON.stringify(this.countries))
      }
    })
  }
}
