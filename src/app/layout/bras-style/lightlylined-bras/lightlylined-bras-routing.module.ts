import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightlylinedbrasComponent } from './lightlylined-bras.component';

const routes: Routes = [
    {
        path: '', component: LightlylinedbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LightlylinedbrasRoutingModule {
}
