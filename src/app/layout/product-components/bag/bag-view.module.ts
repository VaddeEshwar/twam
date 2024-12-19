import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { BagviewRoutingModule } from './bag-view-routing.module';
import { BagviewComponent } from './bag-view.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NgbModule,NgbRatingModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        BagviewRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        BagviewComponent,
        
    ],
    exports: [BagviewComponent],
})
export class BagviewModule {}
