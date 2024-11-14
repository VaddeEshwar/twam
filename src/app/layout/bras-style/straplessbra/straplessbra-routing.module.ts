import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StraplessbraComponent } from './straplessbra.component';

const routes: Routes = [
    {
        path: '', component: StraplessbraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StraplessbraRoutingModule {
}
