import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HomeRoutingModule,
        FeatherModule.pick(allIcons),
        YouTubePlayerModule
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule {}
