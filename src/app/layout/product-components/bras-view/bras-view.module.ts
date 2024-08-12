import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrasviewRoutingModule } from './bras-view-routing.module';
import { BrasviewComponent } from './bras-view.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import {ZoomImageViewerComponent} from '../zoom-image-viewer/zoom-image-viewer.component';
import { GetZoomPositionDirective} from '../directives/get-zoom-position.directive';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CarouselModule,
        // NgModule,
        NgbModule,
        NgbRatingModule,
        FormsModule,ReactiveFormsModule,
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
        ZoomImageViewerComponent,
        GetZoomPositionDirective
        
    ]
})
export class BrasviewModule {}
