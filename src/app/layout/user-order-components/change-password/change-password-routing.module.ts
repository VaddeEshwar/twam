import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './change-password.component';

const routes: Routes = [
    {
        path: '', component: ChangepasswordComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangepasswordRoutingModule {
}
