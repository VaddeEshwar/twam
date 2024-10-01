import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Country {
  form : FormGroup;
  countryID:string;
  countryName:string;
  countryCode:string;
  dial :string;
  currency_Name :string;
  currency :string;
  isActive :string;
  constructor() {
    this.form = new FormGroup({
        countryID:new FormControl(''),
        countryName:new FormControl(''),
        countryCode:new FormControl(''),
        dial:new FormControl(''),
        currency_Name:new FormControl(''),
        currency:new FormControl(''),
        isActive:new FormControl(''),
    })
  }
  populateFormData(Country: any) {
    this.form.patchValue(Country);
}

  }