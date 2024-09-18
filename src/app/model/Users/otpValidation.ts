import { FormGroup, FormControl, Validators } from '@angular/forms';
export class otpValidation {
    form: FormGroup;
       constructor() {
        this.form = new FormGroup({
            passcode: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),

        });
    }
    populateFormData(otpValidation: any) {
        this.form.patchValue(otpValidation);
    }
}