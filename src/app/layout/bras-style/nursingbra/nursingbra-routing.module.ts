import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NursingbraComponent } from './nursingbra.component';

const routes: Routes = [
    {
        path: '', component: NursingbraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NursingbraRoutingModule {
}
