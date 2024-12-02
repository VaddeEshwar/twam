import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NursingbraComponent } from './nursingbra.component';

const routes: Routes = [
    {
        path: '', component: NursingbraComponent,
        children: [
            { path: '', redirectTo: 'NursingbraComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: NursingbraComponent,
        data: {
          title: 'Nursing Bras',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Nursing Bras', }
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
export class NursingbraRoutingModule {
}
