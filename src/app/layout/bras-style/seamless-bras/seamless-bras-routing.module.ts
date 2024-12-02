import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { seamlessbrasComponent } from './seamless-bras.component';

const routes: Routes = [
    {
        path: '', component: seamlessbrasComponent,
        children: [
            { path: '', redirectTo: 'seamlessbrasComponent', pathMatch: 'full' },
            {
                path: '',
                component: seamlessbrasComponent,
                data: {
                    title: 'Seamless Bras',
                    urls: [
                        { title: 'Home', url: '/home' },
                        { title: 'Bras Style', url: '/bras-style' },
                        { title: 'Seamless Bras', }
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
export class seamlessbrasRoutingModule {
}
