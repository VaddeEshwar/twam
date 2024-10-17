import { FormGroup, FormControl, Validators } from '@angular/forms';
export class City {
  form : FormGroup;
  cityID:string;
  cityName:string;
  stateID:string;
  constructor() {
    this.form = new FormGroup({
        cityID:new FormControl('0'),
        cityName:new FormControl(''),
        stateID:new FormControl('0'),
    })
  }
  populateFormData(City: any) {
    this.form.patchValue(City);
}

  }