import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrazilianpantiesComponent } from './brazilian-panties.component';

const routes: Routes = [
    {
        path: '', component: BrazilianpantiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrazilianpantiesRoutingModule {
}
