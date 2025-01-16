// import { FormGroup, FormControl, Validators } from '@angular/forms';
// export class RefreshPayload  {
//     form: FormGroup;
//     userGUID:string;
//     refreshToken:string;
//     expiryDate:string;
//     populateFormData?: Function;
//     constructor() {
//         this.form = new FormGroup({
//             userGUID: new FormControl('', [Validators.required]),
//             refreshToken: new FormControl('', [Validators.required]),
//             expiryDate: new FormControl('', [Validators.required]),
//         });
//     }
  
// }
export interface RefreshToken {
    userGUID: string;
    refreshToken: string;
    expiryDate: Date;
  }