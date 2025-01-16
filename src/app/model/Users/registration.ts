import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch} from '../../layout/shared/helpers/must-match.validator';
import { validPattern } from '../../layout/shared/helpers/patter-match.validator';
export class Registration {
    form: FormGroup;
       constructor() { 
        const patternRegex= new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
        this.form = new FormGroup({
            firstName: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(10)])),
            lastName: new FormControl('', [Validators.required]),
            mobile:  new FormControl ('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
            countryCode: new FormControl('', [Validators.required]),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required,validPattern(patternRegex)]),
            email: new FormControl('', [Validators.required,Validators.email]),
            role: new FormControl('0'),
            status: new FormControl('0'), 
            usrStatus: new FormControl('0'),
            userId: new FormControl('0'),
            passwordHash: new FormControl('',[Validators.required, Validators.pattern(/^\d{10}$/)]),
            salt: new FormControl('0'),
            emalverified: new FormControl('0'),
            token: new FormControl('0'),
            gender: new FormControl('', [Validators.required]),
            dateofBirth: new FormControl('2024-10-01T10:18:03.711Z', [Validators.required]),
            verificationURL: new FormControl('onlytwam.com'),
            strApp: new FormControl('Twam'),
            userGuid: new FormControl('50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2'),

        },
        
    
    );
       
    }
    populateFormData(Registration: any) {
        this.form.patchValue(Registration);
    }
}