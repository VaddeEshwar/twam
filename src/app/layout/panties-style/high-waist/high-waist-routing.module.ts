import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighwaistComponent } from './high-waist.component';

const routes: Routes = [
    {
        path: '', component: HighwaistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HighwaistRoutingModule {
}
