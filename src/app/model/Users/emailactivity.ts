import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Emailactivity {
    form: FormGroup;
       constructor() {
        this.form = new FormGroup({
            userGuid: new FormControl('', [Validators.required]),
            userActivity: new FormControl('', [Validators.required]),
            createdOn: new FormControl('', [Validators.required]),
            fromdate: new FormControl('', [Validators.required]),
            todate: new FormControl('', [Validators.required]),

        });
    }
    populateFormData(Emailactivity: any) {
        this.form.patchValue(Emailactivity);
    }
}