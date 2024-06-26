import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartviewComponent } from './cart-view.component';

const routes: Routes = [
    {
        path: '', component: CartviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartviewRoutingModule {
}
