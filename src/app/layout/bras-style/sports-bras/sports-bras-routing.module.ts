import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsbrasComponent } from './sports-bras.component';

const routes: Routes = [
    {
        path: '', component: SportsbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SportsbrasRoutingModule {
}
