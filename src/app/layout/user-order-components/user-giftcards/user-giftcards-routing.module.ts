import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsergiftcardsComponent } from './user-giftcards.component';
import { UseraddressComponent} from '../user-address/user-address.component';

const routes: Routes = [
    {
        path: '', component: UsergiftcardsComponent,
        children: [
                {
                        path: 'UsergiftcardsComponent',
                        component: UsergiftcardsComponent,
                        data: {
                            title: 'Gift cards',
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
export class UsergiftcardsRoutingModule {
}
