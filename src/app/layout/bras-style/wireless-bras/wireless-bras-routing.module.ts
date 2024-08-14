import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WirelessbrasComponent } from './wireless-bras.component';

const routes: Routes = [
    {
        path: '', component: WirelessbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WirelessbrasRoutingModule {
}
