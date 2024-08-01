import { state } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export class shoppning {
    form : FormGroup;
   
    constructor() { 
        this.form = new FormGroup({
            id:  new FormControl('',[Validators.required]),
            username: new FormControl('',[Validators.required]),
            emailid: new FormControl('',[Validators.required]),
            mobileNo: new FormControl('',[Validators.required]),
            state: new FormControl('',[Validators.required]),
            city: new FormControl('',[Validators.required]),
            address :new FormControl('',[Validators.required]),
         })
    }
    populateFormData(shoppning: any) {
        this.form.patchValue(shoppning);
    }
}
