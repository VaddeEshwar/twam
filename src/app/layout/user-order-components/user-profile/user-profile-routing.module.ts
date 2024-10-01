import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './user-profile.component';
import { UseraddressComponent} from '../user-address/user-address.component';

const routes: Routes = [
    {
        path: '', component: UserprofileComponent,
        children: [
            { path: '', redirectTo: 'UseraddressComponent', pathMatch: 'full'},
                {
                        path: 'UseraddressComponent',
                        component: UseraddressComponent,
                        data: {
                            title: 'UseraddressComponent',
                            urls: [
                              { title: 'Dashboard', url: '/dashboard' },
                              { title: 'List' }
                            ]
                          }
                },
                
               					
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserprofileRoutingModule {
}
