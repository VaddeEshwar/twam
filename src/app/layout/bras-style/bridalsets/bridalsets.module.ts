import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { BridalsetsRoutingModule } from './bridalsets-routing.module'
import { BridalsetsComponent } from './bridalsets.component';
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
        BridalsetsRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
        BagviewModule
    ],
    declarations: [
        BridalsetsComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BridalsetsModule {}
