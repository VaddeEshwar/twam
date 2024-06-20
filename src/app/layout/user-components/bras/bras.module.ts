import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { BrasRoutingModule } from './bras-routing.module';
import { BrasComponent } from './bras.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        // NgbModal,
        NgbRatingModule,
        CommonModule,
        NgbCarouselModule,
        ReactiveFormsModule,
        FormsModule,
        NgbAlertModule,
        BrasRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        BrasComponent,
    ]
})
export class BrasModule {}
