import { FormGroup, FormControl, Validators } from '@angular/forms';
export class login {
    form: FormGroup;
 
       constructor() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            strApp: new FormControl('', [Validators.required]),
       

        });
    }
    populateFormData(login: any) {
        this.form.patchValue(login);
    }
}