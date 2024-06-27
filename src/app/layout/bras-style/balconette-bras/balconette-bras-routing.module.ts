import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialneedsComponent } from './specialneeds.component';

const routes: Routes = [
    {
        path: '', component: SpecialneedsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpecialneedsRoutingModule {
}
