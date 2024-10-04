// export class User {
//   constructor() {}
//   // id: number;
//   // username: string;
//   // password: string;
//   // strApp:string;
//   // db_Name:string;
//   // clientId:String;
//   // createdAt: Date;
//   // createdBy: string;
//  }
import { FormGroup, FormControl, Validators } from '@angular/forms';
export class User {
  form : FormGroup;
   username: string;
   password: string;
  
  constructor() {
    this.form = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
  }
  populateFormData(User: any) {
    this.form.patchValue(User);
}

  }
  

