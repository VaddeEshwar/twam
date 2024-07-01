import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { BrasviewRoutingModule } from './bras-view-routing.module';
import { BrasviewComponent } from './bras-view.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
    imports: [
        // NgbModal,
        NgxImageZoomModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        BrasviewRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        BrasviewComponent,
    ]
})
export class BrasviewModule {}
