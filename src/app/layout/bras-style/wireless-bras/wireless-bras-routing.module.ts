import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WirelessbrasComponent } from './wireless-bras.component';

const routes: Routes = [
    {
        path: '', component: WirelessbrasComponent,
        children: [
            { path: '', redirectTo: 'WirelessbrasComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: WirelessbrasComponent,
        data: {
          title: 'Wireless Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Wireless Bras', }
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
export class WirelessbrasRoutingModule {
}
