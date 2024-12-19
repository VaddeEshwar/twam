import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseremailverifyComponent } from './user-emailverify.component';

const routes: Routes = [
    {
        path: '', component: UseremailverifyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UseremailverifyRoutingModule {
}
