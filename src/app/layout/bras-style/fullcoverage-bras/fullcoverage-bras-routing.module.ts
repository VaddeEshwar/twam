import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullcoveragebrasComponent } from './fullcoverage-bras.component';

const routes: Routes = [
    {
        path: '', component: FullcoveragebrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FullcoveragebrasRoutingModule {
}
