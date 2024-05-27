import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
  path: '', 
  component: LayoutComponent,
  children: [
    { path: 'home', loadChildren:()=>import( './home/home.module').then(x => x.HomeModule) },
    { path: 'panties', loadChildren:()=>import( './panties/panties.module').then(x => x.PantiesModule) },
    { path: 'bras', loadChildren:()=>import( './bras/bras.module').then(x => x.BrasModule) },
    { path: 'essentials', loadChildren:()=>import( './essentials/essentials.module').then(x => x.EssentialsModule) },
    { path: 'login', loadChildren:()=>import( './login/login.module').then(x => x.LoginModule) },
  ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
