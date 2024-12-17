import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UsergiftcardsRoutingModule } from './user-giftcards-routing.module';
import { UsergiftcardsComponent } from './user-giftcards.component';
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
        UsergiftcardsRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        UsergiftcardsComponent,
    ]
})
export class UsergiftcardsModule {}
