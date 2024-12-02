import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightlylinedbrasComponent } from './lightlylined-bras.component';

const routes: Routes = [
    {
        path: '', component: LightlylinedbrasComponent,
        children: [
            { path: '', redirectTo: 'LightlylinedbrasComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: LightlylinedbrasComponent,
        data: {
          title: 'Mastectomy Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Mastectomy Bras', }
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
export class LightlylinedbrasRoutingModule {
}
