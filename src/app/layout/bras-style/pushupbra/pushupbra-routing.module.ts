import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushupbraComponent } from './pushupbra.component';

const routes: Routes = [
    {
        path: '', component: PushupbraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PushupbraRoutingModule {
}
