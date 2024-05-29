import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantiesComponent } from './panties.component';

const routes: Routes = [
    {
        path: '', component: PantiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PantiesRoutingModule {
}
