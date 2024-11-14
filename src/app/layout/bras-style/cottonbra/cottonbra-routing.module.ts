import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CottonbraComponent } from './cottonbra.component';

const routes: Routes = [
    {
        path: '', component: CottonbraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CottonbraRoutingModule {
}
