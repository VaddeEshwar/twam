import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { EssentialsRoutingModule } from './essentials-routing.module';
import { EssentialsComponent } from './essentials.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        EssentialsRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        EssentialsComponent,
    ]
})
export class EssentialsModule {}
