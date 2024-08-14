import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapewearComponent } from './shapewear.component';

const routes: Routes = [
    {
        path: '', component: ShapewearComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShapewearRoutingModule {
}
