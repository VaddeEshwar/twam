import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushupbraComponent } from './pushupbra.component';

const routes: Routes = [
    {
        path: '', component: PushupbraComponent,
        children: [
            { path: '', redirectTo: 'PushupbraComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: PushupbraComponent,
        data: {
          title: 'Pushup Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Pushup Bras', }
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
export class PushupbraRoutingModule {
}
