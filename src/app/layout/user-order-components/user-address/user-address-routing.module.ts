import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseraddressComponent } from './user-address.component';

const routes: Routes = [
    {
        path: '', component: UseraddressComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UseraddressRoutingModule {
}
