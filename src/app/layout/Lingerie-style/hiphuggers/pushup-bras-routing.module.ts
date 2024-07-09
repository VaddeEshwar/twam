import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pushupbrasComponent } from './pushup-bras.component';

const routes: Routes = [
    {
        path: '', component: pushupbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pushupbrasRoutingModule {
}
