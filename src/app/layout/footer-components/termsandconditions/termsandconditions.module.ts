import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {TermsandconditionsRoutingModule  } from './termsandconditions-routing.module';
import { TermsandconditionsComponent } from './termsandconditions.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
        // NgbModal,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        TermsandconditionsRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        TermsandconditionsComponent,
    ]
})
export class TermsandconditionsModule {}
