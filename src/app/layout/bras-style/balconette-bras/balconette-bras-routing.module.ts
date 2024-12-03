import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalconettebrasComponent } from './balconette-bras.component';

const routes: Routes = [
    {
        path: '', component: BalconettebrasComponent,
        children: [
            {
                path: '',
                component: BalconettebrasComponent,
                data: {
                    title: 'Balconette Bras',
                    urls: [
                        { title: 'Home', url: '/home' },
                        { title: 'Balconette Bras', url:'' }//sc1
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
export class BalconettebrasRoutingModule {
}
