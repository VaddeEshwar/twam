import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
  path: '', 
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: '/dashboard/classic', pathMatch: 'full' },
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
    { path: 'product-components/bag', loadChildren:()=>import('./product-components/cart/cart-view.module').then(x=>x.CartviewModule)},
    { path: 'product-components/userform', loadChildren:()=>import( './product-components/ngx-wizard/ngx-wizard.module').then(x => x.NGXFormWizardModule) },
    { path: 'login', loadChildren:()=>import( '../login/login.module').then(x => x.LoginModule) },
       //////////bras-styles///////////
    { path: 'bras-style/pushupbras', loadChildren:()=>import( './bras-style/pushup-bras/pushup-bras.module').then(x => x.pushupbrasModule) },
    { path: 'bras-style/wireless-bras', loadChildren:()=>import( './bras-style/wireless-bras/wireless-bras.module').then(x => x.WirelessbrasModule) },
    { path: 'bras-style/Bralettes', loadChildren:()=>import( './bras-style/balconette-bras/balconette-bras.module').then(x => x.BalconettebrasModule) },
    { path: 'bras-style/Plunge-bra', loadChildren:()=>import( './bras-style/bralettes/bralettes.module').then(x => x.BralettesModule) },
    { path: 'bras-style/T-shirt-bras', loadChildren:()=>import( './bras-style/t-shirt-bras/t-shirt-bras.module').then(x => x.TshirtbrasModule) },
    { path: 'bras-style/strapless-bras', loadChildren:()=>import( './bras-style/strapless-bras/strapless-bras.module').then(x => x.StraplessbrasModule) },
    { path: 'bras-style/sports-bras', loadChildren:()=>import( './bras-style/sports-bras/sports-bras.module').then(x => x.SportsbrasModule) },

     //////////////Panties-Style Component/////////////////////
   { path: 'panties-style/boyshorts', loadChildren:()=>import( './panties-style/boyshorts/boyshorts.module').then(x => x.boyshortsModule) },
   { path: 'panties-style/brazilian-panties', loadChildren:()=>import( './panties-style/brazilian-panties/brazilian-panties.module').then(x => x.BrazilianpantiesModule) },
   { path: 'panties-style/cheekies', loadChildren:()=>import( './panties-style/cheekies/cheekies.module').then(x => x.CheekiesModule) },
   { path: 'panties-style/garters', loadChildren:()=>import( './panties-style/garters/garters.module').then(x => x.GartersModule) },
   { path: 'panties-style/high-waist', loadChildren:()=>import( './panties-style/high-waist/high-waist.module').then(x => x.HighwaistModule) },
   { path: 'panties-style/hiphuggers', loadChildren:()=>import( './panties-style/hiphuggers/hiphuggers.module').then(x => x.HiphuggersModule) },
   { path: 'panties-style/shapewear', loadChildren:()=>import( './panties-style/shapewear/shapewear.module').then(x => x.ShapewearModule) },
   { path: 'panties-style/thongs-v-strings', loadChildren:()=>import( './panties-style/thongs-v-strings/Thongsvstrings.module').then(x => x.ThongsvstringsModule) },


    /////////User-view/////////////////////////
    { path: 'user-profile/profile', loadChildren:()=>import( './user-order-components/user-profile/user-profile.module').then(x => x.UserprofileModule) },
    { path: 'product-components/ngx-wizard', loadChildren:()=>import( './product-components/ngx-wizard/ngx-wizard.module').then(x => x.NGXFormWizardModule) },
    { path: 'product-components/registration', loadChildren:()=>import( './user-order-components/user-odertrak/user-odertrak.module').then(x => x.UserordertrakModule) },
    { path: 'product-components/updateaddress', loadChildren:()=>import( './user-order-components/user-address/user-address.module').then(x => x.UseraddressModule) },

  ],
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
