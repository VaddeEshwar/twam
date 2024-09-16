import { FormGroup, FormControl, Validators } from '@angular/forms';
export class AddressMap {
    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            userId: new FormControl('', [Validators.required]),
            addressId: new FormControl('', [Validators.required]),
            userAddressId: new FormControl('', [Validators.required]),
            strMsg: new FormControl('', [Validators.required]),
            strApp: new FormControl('', [Validators.required]),

        });
    }
    populateFormData(userId: any,userAddressId:any,strApp:any) {
        this.form.patchValue(userId,userAddressId,);
    }
}