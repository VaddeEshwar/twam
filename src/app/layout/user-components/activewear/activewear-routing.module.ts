import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivewearComponent } from './activewear.component';

const routes: Routes = [
    {
        path: '', component: ActivewearComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivewearRoutingModule {
}
