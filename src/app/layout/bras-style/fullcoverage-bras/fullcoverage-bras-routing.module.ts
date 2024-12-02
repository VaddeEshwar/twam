import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullcoveragebrasComponent } from './fullcoverage-bras.component';

const routes: Routes = [
    {
        path: '', component: FullcoveragebrasComponent,
        children: [
            { path: '', redirectTo: 'FullcoveragebrasComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: FullcoveragebrasComponent,
        data: {
          title: 'Balconette Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Balconette Bras', }
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
export class FullcoveragebrasRoutingModule {
}
