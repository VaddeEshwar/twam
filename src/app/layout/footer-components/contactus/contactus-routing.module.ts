import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LakeproofviewComponent } from './contactus.component';

const routes: Routes = [
    {
        path: '', component: LakeproofviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LakeproofviewRoutingModule {
}
