import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StraplessbraComponent } from './straplessbra.component';

const routes: Routes = [
    {
        path: '', component: StraplessbraComponent,
        children: [
            { path: '', redirectTo: 'StraplessbraComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: StraplessbraComponent,
        data: {
          title: 'Strapless Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Strapless Bras', }
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
export class StraplessbraRoutingModule {
}
