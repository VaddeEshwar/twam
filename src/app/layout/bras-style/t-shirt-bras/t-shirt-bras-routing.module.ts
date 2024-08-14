import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TshirtbrasComponent } from './t-shirt-bras.component';

const routes: Routes = [
    {
        path: '', component: TshirtbrasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TshirtbrasComponentRoutingModule {
}
