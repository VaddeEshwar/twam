import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LightlylinedbrasRoutingModule } from './lightlylined-bras-routing.module';
import { LightlylinedbrasComponent } from './lightlylined-bras.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        FormsModule, ReactiveFormsModule,
        LightlylinedbrasRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        LightlylinedbrasComponent,
    ],

})
export class LightlylinedbrasModule {}
