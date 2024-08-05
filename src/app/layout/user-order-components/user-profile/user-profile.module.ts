import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserprofileRoutingModule } from './user-profile-routing.module';
import { UserprofileComponent } from './user-profile.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        UserprofileRoutingModule,
        FeatherModule.pick(allIcons),
        CarouselModule.forRoot(),
    ],
    declarations: [
        UserprofileComponent,
    ]
})
export class UserprofileModule {}
