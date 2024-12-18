//Wizard form data class Starts
export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    mobilenumber:string = '';
    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
//Wizard form data class Ends

//Personal tab data class starts
export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    mobilenumber:string = '';
}
//Personal tab data class ends

//Address tab data class starts
export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}
export class card {
    cardNo: string = '';
    Expiry: string = '';
    CVC: string = '';
    nameCard: string = '';
}
//Address tab data class Ends