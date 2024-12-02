import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoyshortsComponent } from './boyshorts.component';

const routes: Routes = [
    {
        path: '', component: BoyshortsComponent,
        children: [
            { path: '', redirectTo: 'BoyshortsComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: BoyshortsComponent,
        data: {
          title: 'Boyshorts',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'panties', url: '/panties-style' },
            { title: 'Boyshorts', }
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
export class boyshortsRoutingModule {
}
