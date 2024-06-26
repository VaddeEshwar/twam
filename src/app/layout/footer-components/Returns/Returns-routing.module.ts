import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnsComponent } from './Returns.component';

const routes: Routes = [
    {
        path: '', component: ReturnsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReturnsRoutingModule {
}
