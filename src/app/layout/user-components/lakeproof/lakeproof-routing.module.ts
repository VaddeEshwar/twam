import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LakeproofComponent } from './lakeproof.component';

const routes: Routes = [
    {
        path: '', component: LakeproofComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LakeproofRoutingModule {
}
