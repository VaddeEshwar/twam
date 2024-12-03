import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandeaubraComponent } from './bandeaubra.component';

const routes: Routes = [
    {
        path: '', component: BandeaubraComponent,
        children: [
            {
                path: '',
                component: BandeaubraComponent,
                data: {
                    title: 'Bandeau Bras',
                    urls: [
                        { title: 'Home', url: '/home' },
                        // { title: 'Bras Style', url: '/bras-style' },
                        { title: 'Bandeau Bras', }
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
export class BandeaubraRoutingModule {
}
