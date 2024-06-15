import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientAddingComponent } from './client-adding.component';

const routes: Routes = [
    {
        path: '', component: ClientAddingComponent,
        data: {
            title: 'Client Adding',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Add' }
            ]
          }
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientAddingRoutingModule {
}
