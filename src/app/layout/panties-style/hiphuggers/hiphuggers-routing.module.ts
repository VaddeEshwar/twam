import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HiphuggersComponent } from './hiphuggers.component';

const routes: Routes = [
    {
        path: '', component: HiphuggersComponent,
        children: [
            { path: '', redirectTo: 'HiphuggersComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: HiphuggersComponent,
        data: {
          title: 'Hiphuggers',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'panties', url: '/panties-style' },
            { title: 'Hiphuggers', }
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
export class HiphuggersRoutingModule {
}
