import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BralettesComponent } from './bralettes.component';

const routes: Routes = [
    {
        path: '', component: BralettesComponent,
        children: [
            { path: '', redirectTo: 'BralettesComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: BralettesComponent,
        data: {
          title: 'Bralettes',
          urls: [
            { title: 'Home', url: '/home' },
            // { title: 'Bras Style', url: '/bras-style' },
            { title: 'Bralettes', }
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
export class BralettesRoutingModule {
}
