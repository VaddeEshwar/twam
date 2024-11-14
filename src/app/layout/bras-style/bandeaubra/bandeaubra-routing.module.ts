import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BralettesComponent } from './bralettes.component';

const routes: Routes = [
    {
        path: '', component: BralettesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BralettesRoutingModule {
}
