import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { seamlessbrasComponent } from './seamless-bras.component';

const routes: Routes = [
    {
        path: '', component: seamlessbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class seamlessbrasRoutingModule {
}
