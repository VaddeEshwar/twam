import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridalsetsComponent } from './bridalsets.component';

const routes: Routes = [
    {
        path: '', component: BridalsetsComponent,
        children: [
            { path: '', redirectTo: 'BridalsetsComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: BridalsetsComponent,
        data: {
          title: 'Bridalsets Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Bridalsets Bras', }
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
export class BridalsetsRoutingModule {
}
