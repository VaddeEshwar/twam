import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridalsetsComponent } from './bridalsets.component';

const routes: Routes = [
    {
        path: '', component: BridalsetsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BridalsetsRoutingModule {
}
