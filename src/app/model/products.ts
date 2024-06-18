import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Client {


    constructor(
        public subtitle: string,
        public image1: string,
        public Price: number
    ) { }
}