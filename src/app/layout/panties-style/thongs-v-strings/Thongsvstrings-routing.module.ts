import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThongsvstringsComponent } from './Thongsvstrings.component';

const routes: Routes = [
    {
        path: '', component: ThongsvstringsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThongsvstringsRoutingModule {
}
