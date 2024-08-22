import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HiphuggersComponent } from './hiphuggers.component';

const routes: Routes = [
    {
        path: '', component: HiphuggersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HiphuggersRoutingModule {
}
