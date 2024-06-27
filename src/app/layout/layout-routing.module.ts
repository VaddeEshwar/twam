import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
  path: '', 
  component: LayoutComponent,
  children: [
    { path: 'home', loadChildren:()=>import( './user-components/home/home.module').then(x => x.HomeModule) },
    { path: 'panties', loadChildren:()=>import( './user-components/panties/panties.module').then(x => x.PantiesModule) },
    { path: 'bras', loadChildren:()=>import( './user-components/bras/bras.module').then(x => x.BrasModule) },
    { path: 'essentials', loadChildren:()=>import( './user-components/essentials/essentials.module').then(x => x.EssentialsModule) },
    { path: 'panties', loadChildren:()=>import( './user-components/panties/panties.module').then(x => x.PantiesModule) },
    { path: 'lakeproof', loadChildren:()=>import( './user-components/lakeproof/lakeproof.module').then(x => x.LakeproofModule) },
    { path: 'swimwear', loadChildren:()=>import( './user-components/swimwear/swimwear.module').then(x => x.SwimwearModule) },
    { path: 'activewear', loadChildren:()=>import( './user-components/activewear/activewear.module').then(x => x.ActivewearModule) },
    ////View Products-Components///////
    { path: 'product-components/brasview', loadChildren:()=>import( './product-components/bras-view/bras-view.module').then(x => x.BrasviewModule) },
    { path: 'product-components/essview', loadChildren:()=>import( './product-components/essentials-view/essentials-view.module').then(x => x.EssentialsviewModule) },
    { path: 'product-components/cart', loadChildren:()=>import('./product-components/cart/cart-view.module').then(x=>x.CartviewModule)},
    { path: 'login', loadChildren:()=>import( '../login/login.module').then(x => x.LoginModule) },
    /////////////////////
    { path: 'bras-style/pushupbras', loadChildren:()=>import( './bras-style/pushup-bras/pushup-bras.module').then(x => x.pushupbrasModule) },

  ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
