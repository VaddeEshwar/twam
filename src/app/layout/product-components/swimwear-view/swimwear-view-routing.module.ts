import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwimwearviewComponent } from './swimwear-view.component';

const routes: Routes = [
    {
        path: '', component: SwimwearviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwimwearviewRoutingModule {
}
