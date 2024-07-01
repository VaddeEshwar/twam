import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SwimwearviewRoutingModule } from './swimwear-view-routing.module';
import { SwimwearviewComponent } from './swimwear-view.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        SwimwearviewRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        SwimwearviewComponent,
    ]
})
export class SwimwearviewModule {}
