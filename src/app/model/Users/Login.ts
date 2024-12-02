import { FormGroup, FormControl, Validators } from '@angular/forms';
export class login {
    form: FormGroup;
    username:string;
    password:string;
       constructor() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
           
        });
    }
    populateFormData(login: any) {
        this.form.patchValue(login);
    }
}
export class resetPassword {
    form: FormGroup;
    username:string;
    password:string;
       constructor() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
           
        });
    }
    populateFormData(resetPassword: any) {
        this.form.patchValue(resetPassword);
    }
}