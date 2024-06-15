import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivewearviewComponent } from './activewear-view.component';

const routes: Routes = [
    {
        path: '', component: ActivewearviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivewearviewRoutingModule {
}
