import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SportsbrasRoutingModule } from './sports-bras-routing.module';
import { SportsbrasComponent } from './sports-bras.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        NgbModule,
        FormsModule, ReactiveFormsModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        SportsbrasRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        SportsbrasComponent,
    ]
})
export class SportsbrasModule {}
