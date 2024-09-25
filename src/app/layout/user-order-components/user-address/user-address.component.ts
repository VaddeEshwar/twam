import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminserviceService } from '../../../services/user-service/user-service.service';
import { UpdateuserRequest } from '../../../model/Users/UpdateuserRequest';
import { Router } from '@angular/router';
import { Form } from '@angular/forms'
import { Country } from '../../../model/Common/Countries'
@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss'],
  providers: [NgbActiveModal, NgbModal,]
})
export class UseraddressComponent implements OnInit {
  countriesData: any;
  subtitle: string;
  updateaddress: UpdateuserRequest;
  activityMsg: string = '';
  fadeOutActive = false;
  Countrymodel: Country
  constructor(private service: AdminserviceService, private router: Router) {
    this.updateaddress = new UpdateuserRequest();
  }

  ngOnInit(): void {
    this.getAllCountries();
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

  getAllCountries() {
    this.service.getAllCountries().subscribe({
      next: (data) => {
        this.countriesData = data;
        console.log("countriesData::" + JSON.stringify(this.countriesData))
      }
    })
  }
}
