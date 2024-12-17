import { FormGroup, FormControl, Validators } from '@angular/forms';
export class states {
    form: FormGroup;
    countryId: string;
    searchKeyword: string;
    constructor() {
        this.form = new FormGroup({
            countryId: new FormControl(''),
            searchKeyword: new FormControl(''),
        })
    }
    populateFormData(states: any) {
        this.form.patchValue(states);
    }
}