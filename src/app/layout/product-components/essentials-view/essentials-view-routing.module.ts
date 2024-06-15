import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EssentialsviewComponent } from './essentials-view.component';

const routes: Routes = [
    {
        path: '', component: EssentialsviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EssentialsviewRoutingModule {
}
