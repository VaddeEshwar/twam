import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { TshirtbrasComponentRoutingModule } from './t-shirt-bras-routing.module';
import { TshirtbrasComponent } from './t-shirt-bras.component';
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
        TshirtbrasComponentRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        TshirtbrasComponent,
    ]
})
export class TshirtbrasModule {}
