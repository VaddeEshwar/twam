import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ChangepasswordRoutingModule } from './change-password-routing.module';
import { ChangepasswordComponent  } from './change-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ChangepasswordRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
       
    ],
    declarations: [
      ChangepasswordComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
    
})
export class  ChangepasswordModule {}
