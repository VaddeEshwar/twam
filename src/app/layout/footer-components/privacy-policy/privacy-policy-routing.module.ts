import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivewearviewComponent } from './privacy-policy.component';

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
