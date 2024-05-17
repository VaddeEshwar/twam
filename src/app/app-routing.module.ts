import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren:()=>import( './layout/layout.module').then(x => x.LayoutModule)},
  { path: 'home', loadChildren:()=>import( './layout/home/home.module').then(x => x.HomeModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
