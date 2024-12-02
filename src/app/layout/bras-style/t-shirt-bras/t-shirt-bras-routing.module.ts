import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TshirtbrasComponent } from './t-shirt-bras.component';

const routes: Routes = [
    {
        path: '', component: TshirtbrasComponent,
        children: [
            { path: '', redirectTo: 'TshirtbrasComponent', pathMatch: 'full' },
            {

                path: '',
                component: TshirtbrasComponent,
                data: {
                    title: 'T-shirt Bras',
                    urls: [
                        { title: 'Home', url: '/home' },
                        { title: 'Bras Style', url: '/bras-style' },
                        { title: 'T-shirt Bras', }
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
export class TshirtbrasComponentRoutingModule {
}
