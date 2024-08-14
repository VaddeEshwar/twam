import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StraplessbrasComponent } from './strapless-bras.component';

const routes: Routes = [
    {
        path: '', component: StraplessbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StraplessbrasRoutingModule {
}
