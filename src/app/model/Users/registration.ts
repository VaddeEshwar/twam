import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Registration {
    form: FormGroup;
       constructor() { 
        this.form = new FormGroup({
            firstName: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(10)])),
            lastName: new FormControl('', [Validators.required]),
            mobile:  new FormControl ('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
            countryCode: new FormControl('', [Validators.required]),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required,Validators.minLength(10)]),
            email: new FormControl('', [Validators.required,Validators.email]),
            role: new FormControl('0'),
            status: new FormControl('0'), 
            usrStatus: new FormControl(''),
            userId: new FormControl('0'),
            passwordHash: new FormControl(''),
            salt: new FormControl(''),
            emalverified: new FormControl('0'),
            token: new FormControl(''),
            gender: new FormControl(''),
            dateofBirth: new FormControl('2024-10-01T10:18:03.711Z', [Validators.required]),
            verificationURL: new FormControl(''),
            strApp: new FormControl(''),
            userGuid: new FormControl(''),

        });
    }
    populateFormData(Registration: any) {
        this.form.patchValue(Registration);
    }
}