import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Registration {
    form: FormGroup;
       constructor() {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            mobile: new FormControl('', [Validators.required,Validators.minLength(10)]),
            countryCode: new FormControl('', [Validators.required]),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required,Validators.minLength(10)]),
            email: new FormControl('', [Validators.required,Validators.email]),
            role: new FormControl('0', [Validators.required]),
            status: new FormControl('0', [Validators.required]), 
            usrStatus: new FormControl('', [Validators.required]),
            userId: new FormControl('0', [Validators.required]),
            passwordHash: new FormControl('', [Validators.required,Validators.minLength(10)]),
            salt: new FormControl('', [Validators.required]),
            emalverified: new FormControl('0', [Validators.required]),
            token: new FormControl('', [Validators.required]),
            gender: new FormControl('', [Validators.required]),
            dateofBirth: new FormControl('2024-10-01T10:18:03.711Z', [Validators.required]),
            verificationURL: new FormControl('', [Validators.required]),
            strApp: new FormControl('', [Validators.required]),
            userGuid: new FormControl('', [Validators.required]),

        });
    }
    populateFormData(Registration: any) {
        this.form.patchValue(Registration);
    }
}