import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SpecialneedsRoutingModule } from './specialneeds-view-routing.module';
import { SpecialneedsComponent } from './specialneeds-view.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        SpecialneedsRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        SpecialneedsComponent,
    ]
})
export class SpecialneedsModule {}
