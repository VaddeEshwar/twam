import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

export class UpdateuserRequest {
  form:FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      countryCode: new FormControl('', [Validators.required]),
      dateofBirth: new FormControl('', [Validators.required]),
      userGuid: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      objAddress: new FormArray([this.initAddress()]) 
    });
  }

  initAddress(): FormGroup {
    return new FormGroup({
      addressID: new FormControl(0),
      houseNumber: new FormControl('', Validators.required),
      buildingName: new FormControl(''),
      addressLine1: new FormControl('', Validators.required),
      addressLine2: new FormControl(''),
      cityID: new FormControl('', Validators.required),
      districtID: new FormControl(0),
      stateID: new FormControl(0),
      countrID: new FormControl(0),
      zipCode: new FormControl('', Validators.required),
      isActive: new FormControl(true),
      addressType: new FormControl(0),
      isaddressUpdate: new FormControl(true)
    });
  }

  addAddress() {
    (this.form.get('objAddress') as FormArray).push(this.initAddress());
  }

  populateFormData(userDetails: any) {
    this.form.patchValue({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobile: userDetails.mobile,
      countryCode: userDetails.countryCode,
      dateofBirth: userDetails.dateofBirth,
      userGuid: userDetails.userGuid,
      gender: userDetails.gender
    });

    const addressFormArray = this.form.get('objAddress') as FormArray;
    addressFormArray.clear(); 
    userDetails.objAddress.forEach((address: any) => {
      addressFormArray.push(new FormGroup({
        addressID: new FormControl(address.addressID),
        houseNumber: new FormControl(address.houseNumber),
        buildingName: new FormControl(address.buildingName),
        addressLine1: new FormControl(address.addressLine1, Validators.required),
        addressLine2: new FormControl(address.addressLine2),
        cityID: new FormControl(address.cityID, Validators.required),
        districtID: new FormControl(address.districtID),
        stateID: new FormControl(address.stateID),
        countrID: new FormControl(address.countrID),
        zipCode: new FormControl(address.zipCode, Validators.required),
        isActive: new FormControl(address.isActive),
        addressType: new FormControl(address.addressType),
        isaddressUpdate: new FormControl(address.isaddressUpdate)
      }));
    });
  }


  getFormData() {
    return this.form.value;
  }
}




// {
//     "firstName": "string",
//     "lastName": "string",
//     "mobile": "string",
//     "countryCode": "string",
//     "dateofBirth": "2024-09-18T09:20:02.315Z",
//     "userGuid": "string",
//     "gender": "string",
//     "objAddress": [
//       {
//         "addressID": 0,
//         "houseNumber": "string",
//         "buildingName": "string",
//         "addressLine1": "string",
//         "addressLine2": "string",
//         "cityID": 0,
//         "districtID": 0,
//         "stateID": 0,
//         "countrID": 0,
//         "zipCode": "string",
//         "isActive": true,
//         "addressType": 0,
//         "isaddressUpdate": true
//       }
//     ]
//   }