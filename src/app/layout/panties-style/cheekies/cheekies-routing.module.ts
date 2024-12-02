import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheekiesComponent } from './cheekies.component';

const routes: Routes = [
    {
        path: '', component: CheekiesComponent,
        children: [
            { path: '', redirectTo: 'CheekiesComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: CheekiesComponent,
        data: {
          title: 'Cheekies',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'panties', url: '/panties-style' },
            { title: 'Cheekies', }
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
export class CheekiesRoutingModule {
}
