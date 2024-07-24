import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagviewComponent } from './bag-view.component';

const routes: Routes = [
    {
        path: '', component: BagviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BagviewRoutingModule {
}
