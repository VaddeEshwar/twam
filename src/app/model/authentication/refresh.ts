import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Address {
    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            userGUID: new FormControl('', [Validators.required]),
            refreshToken: new FormControl('', [Validators.required]),
            expiryDate: new FormControl('', [Validators.required]),
        });
    }
    populateFormData(userId: any,) {
        this.form.patchValue(userId);
    }
}