import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { LayoutComponent } from './layout.component';
import { FullComponent } from './full/full.component';
import { StarterComponent } from './starter/starter.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HorizontalNavigationComponent } from './shared/horizontal-header/horizontal-navigation.component';
import { ModalModule } from 'ngx-bootstrap/modal';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    LayoutComponent,
    FullComponent,
    // StarterComponent,
    BreadcrumbComponent,
    HorizontalNavigationComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FeatherModule,
    FeatherModule.pick(allIcons),
    PerfectScrollbarModule,
    TranslateModule.forChild(),
    ModalModule.forRoot(),
    
  ],
  providers: [
    {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG    
    },
  ],
})
export class LayoutModule { }
