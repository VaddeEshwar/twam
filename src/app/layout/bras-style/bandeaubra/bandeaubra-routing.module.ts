import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandeaubraComponent } from './bandeaubra.component';

const routes: Routes = [
    {
        path: '', component: BandeaubraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  BandeaubraRoutingModule {
}