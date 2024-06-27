import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantiesviewComponent } from './panties-view.component';

const routes: Routes = [
    {
        path: '', component: PantiesviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PantiesviewRoutingModule {
}
