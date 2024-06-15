import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ClientAddingRoutingModule } from './client-adding-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { ClientAddingComponent } from './client-adding.component';

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,  
        ClientAddingRoutingModule,
        AgGridModule,
        
    ],
    declarations: [
        ClientAddingComponent,
    ]
})
export class ClientAddingModule {}
