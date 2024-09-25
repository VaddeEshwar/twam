import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Emailactivity {
    form: FormGroup;
       constructor() {
        this.form = new FormGroup({
            subject: new FormControl('', [Validators.required]),
            sentDateTime: new FormControl('', [Validators.required]),
            userGuid: new FormControl('', [Validators.required]),

        });
    }
    populateFormData(Emailactivity: any) {
        this.form.patchValue(Emailactivity);
    }
}