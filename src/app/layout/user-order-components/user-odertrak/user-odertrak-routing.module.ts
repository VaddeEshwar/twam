import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserordertrakComponent } from './user-odertrak.component';

const routes: Routes = [
    {
        path: '', component: UserordertrakComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserordertrakRoutingModule {
}
