import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrasComponent } from './bras.component';

const routes: Routes = [
    {
        path: '', component: BrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrasRoutingModule {
}
