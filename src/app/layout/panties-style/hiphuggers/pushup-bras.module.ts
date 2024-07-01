import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { pushupbrasRoutingModule } from './pushup-bras-routing.module';
import { pushupbrasComponent } from './pushup-bras.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NgbRatingModule,
        NgbModule,
        FormsModule, ReactiveFormsModule,
        NgxImageZoomModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        pushupbrasRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        pushupbrasComponent,
    ]
})
export class pushupbrasModule {}
