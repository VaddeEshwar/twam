import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Address {
    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            addressID: new FormControl('', [Validators.required]),
            houseNumber: new FormControl('', [Validators.required]),
            buildingName: new FormControl('', [Validators.required]),
            addressLine1: new FormControl('', [Validators.required]),
            addressLine2: new FormControl('', [Validators.required]),
            cityID: new FormControl('', [Validators.required]),
            districtID: new FormControl('', [Validators.required]),
            stateID: new FormControl('', [Validators.required]),
            countrID: new FormControl('1', [Validators.required]),
            zipCode: new FormControl('', [Validators.required]),
            isActive: new FormControl('true', [Validators.required]),
            addressType: new FormControl('', [Validators.required]),
            resultAddressId: new FormControl('', [Validators.required]),
            successMessage: new FormControl('', [Validators.required]),
            userId: new FormControl('', [Validators.required]),
            userAddressId: new FormControl('', [Validators.required]),
            strApp: new FormControl('', [Validators.required]),

        });
    }
    // populateFormData(userId: any) {
    //     this.form.patchValue(userId);
    // }
}