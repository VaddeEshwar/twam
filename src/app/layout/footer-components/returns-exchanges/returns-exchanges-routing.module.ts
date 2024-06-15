import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnsexchangesComponent } from './returns-exchanges.component';

const routes: Routes = [
    {
        path: '', component: ReturnsexchangesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReturnsexchangesRoutingModule {
}
