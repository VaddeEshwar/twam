import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { PushupbraRoutingModule } from './pushupbra-routing.module'
import { PushupbraComponent } from './pushupbra.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BagviewModule} from '../../product-components/bag/bag-view.module'

@NgModule({
    imports: [
        NgbModule,
        FormsModule, ReactiveFormsModule,
        NgxImageZoomModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        PushupbraRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
        BagviewModule
    ],
    declarations: [
        PushupbraComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PushupbraModule {}
