import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapewearComponent } from './shapewear.component';

const routes: Routes = [
    {
        path: '', component: ShapewearComponent,
        children: [
            { path: '', redirectTo: 'ShapewearComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: ShapewearComponent,
        data: {
          title: 'Shapewear',
          urls: [
            { title: 'Home', url: '/home' },
            { title: 'panties', url: '/panties-style' },
            { title: 'Shapewear', }
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
export class ShapewearRoutingModule {
}
