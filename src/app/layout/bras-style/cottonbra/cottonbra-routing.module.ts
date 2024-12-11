import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CottonbraComponent } from './cottonbra.component';

const routes: Routes = [
  {
    path: '', component: CottonbraComponent,
    children: [
      {
        path: 'CottonbraComponent',
        component: CottonbraComponent,
        data: {
          title: 'Cotton',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'Bras Style', url: '/bras-style' },
            { title: 'Cotton Bras', }
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
export class CottonbraRoutingModule {
}
