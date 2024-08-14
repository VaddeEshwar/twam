import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalconettebrasComponent } from './balconette-bras.component';

const routes: Routes = [
    {
        path: '', component: BalconettebrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BalconettebrasRoutingModule {
}
