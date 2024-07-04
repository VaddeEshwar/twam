import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ZoomImageViewerComponent } from './zoom-image-viewer.component';
import { ZoomImageViewerRoutingModule } from './zoom-image-viewer-routing.module';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {GetZoomPositionDirective } from '../directives/get-zoom-position.directive'

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ZoomImageViewerRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        ZoomImageViewerComponent,
        GetZoomPositionDirective
    ]
})
export class ZoomImageViewerModule {}
