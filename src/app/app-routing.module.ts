import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderConfirmationComponent } from './lazyModules/coupons/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path:'order-confirmation', component:OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
