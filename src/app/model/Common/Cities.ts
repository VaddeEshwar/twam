import { FormGroup, FormControl, Validators } from '@angular/forms';
export class City {
  form : FormGroup;
  cityID:string;
  cityName:string;
  stateId:number;
  constructor() {
    this.form = new FormGroup({
        cityID:new FormControl('0'),
        cityName:new FormControl(''),
        stateId:new FormControl(''),
    })
  }
  populateFormData(City: any) {
    this.form.patchValue(City);
}

  }