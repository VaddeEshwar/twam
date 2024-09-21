import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserordertrakRoutingModule } from './user-odertrak-routing.module';
import { UserordertrakComponent } from './user-odertrak.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        UserordertrakRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        UserordertrakComponent,
    ]
})
export class UserordertrakModule {}
