import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThongsvstringsComponent } from './Thongsvstrings.component';

const routes: Routes = [
    {
        path: '', component: ThongsvstringsComponent,
        children: [
            { path: '', redirectTo: 'ThongsvstringsComponent', pathMatch: 'full'},
            {
    
        path: '',
        component: ThongsvstringsComponent,
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
export class ThongsvstringsRoutingModule {
}
