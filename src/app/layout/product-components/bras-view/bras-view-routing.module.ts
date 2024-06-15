import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrasviewComponent } from './bras-view.component';

const routes: Routes = [
    {
        path: '', component: BrasviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrasviewRoutingModule {
}
