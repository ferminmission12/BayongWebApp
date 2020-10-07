import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductComponent } from './product/product.component';
import { BayongComponent } from './bayong/bayong.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {
    path:"",component:LandingpageComponent
  },
  {
    path:"bayong",component:BayongComponent
  },
  {
    path:"product",component:ProductComponent
  }
  ,
  {
    path:"checkout",component:CheckoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
