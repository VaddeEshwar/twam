import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwimwearComponent } from './swimwear.component';

const routes: Routes = [
    {
        path: '', component: SwimwearComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwimwearRoutingModule {
}
