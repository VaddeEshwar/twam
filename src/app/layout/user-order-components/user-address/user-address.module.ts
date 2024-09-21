import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UseraddressRoutingModule } from './user-address-routing.module';
import {UseraddressComponent  } from './user-address.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
       UseraddressRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
       
    ],
    declarations: [
        UseraddressComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
    
})
export class   UseraddressModule {}
