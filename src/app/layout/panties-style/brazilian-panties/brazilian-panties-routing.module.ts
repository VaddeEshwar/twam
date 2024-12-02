import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrazilianpantiesComponent } from './brazilian-panties.component';

const routes: Routes = [
    {
        path: '', component: BrazilianpantiesComponent,
        children: [
            { path: '', redirectTo: 'BrazilianpantiesComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: BrazilianpantiesComponent,
        data: {
          title: 'Brazilian',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'panties', url: '/panties-style' },
            { title: 'Brazilian', }
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
export class BrazilianpantiesRoutingModule {
}
