import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StraplessbrasComponent } from './strapless-bras.component';

const routes: Routes = [
    {
        path: '', component: StraplessbrasComponent,
        children: [
            {
                path: '',
                component: StraplessbrasComponent,
                data: {
                    title: '',
                    urls: [
                        { title: 'Home', url: '/home' },
                        { title: 'Strapless Bras', }
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
export class StraplessbrasRoutingModule {
}
