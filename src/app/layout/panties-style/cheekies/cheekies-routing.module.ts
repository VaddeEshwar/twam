import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheekiesComponent } from './cheekies.component';

const routes: Routes = [
    {
        path: '', component: CheekiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheekiesRoutingModule {
}
