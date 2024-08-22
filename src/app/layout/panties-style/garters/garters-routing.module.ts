import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GartersComponent } from './garters.component';

const routes: Routes = [
    {
        path: '', component: GartersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GartersRoutingModule {
}
