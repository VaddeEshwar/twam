import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsbrasComponent } from './sports-bras.component';

const routes: Routes = [
    {
        path: '', component: SportsbrasComponent,
        children: [
            { path: '', redirectTo: 'SportsbrasComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: SportsbrasComponent,
        data: {
          title: 'Sports Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Sports Bras', }
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
export class SportsbrasRoutingModule {
}
