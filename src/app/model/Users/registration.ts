import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Registration {
    form: FormGroup;
       constructor() {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            mobile: new FormControl('', [Validators.required]),
            countryCode: new FormControl('', [Validators.required]),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            role: new FormControl('0', [Validators.required]),
            status: new FormControl('0', [Validators.required]),
            usrStatus: new FormControl('', [Validators.required]),
            userId: new FormControl('0', [Validators.required]),
            passwordHash: new FormControl('', [Validators.required]),
            salt: new FormControl('', [Validators.required]),
            emalverified: new FormControl('0', [Validators.required]),
            token: new FormControl('', [Validators.required]),
            gender: new FormControl('', [Validators.required]),
            dateofBirth: new FormControl('', [Validators.required]),
            verificationURL: new FormControl('', [Validators.required]),
            strApp: new FormControl('', [Validators.required]),
            userGuid: new FormControl('', [Validators.required]),

        });
    }
    populateFormData(Registration: any) {
        this.form.patchValue(Registration);
    }
}