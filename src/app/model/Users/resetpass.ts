import { FormGroup, FormControl, Validators } from '@angular/forms';

export class resetPassword {
    form: FormGroup;
  
       constructor() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required]),
            newPassword: new FormControl('', [Validators.required]),
            salt :  new FormControl('Type1'),
           
        });
    }
    populateFormData(resetPassword: any) {
        this.form.patchValue(resetPassword);
    }
}