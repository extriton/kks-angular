import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ShopComponent } from './shop/shop.component';
import { StoreComponent } from './store/store.component';
import { SellersComponent } from './sellers/sellers.component';
import { CartComponent } from './cart/cart.component';
import { FinanceComponent } from './finance/finance.component';
import { CompComponent } from './comp/comp.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'store', component: StoreComponent},
  { path: 'sellers', component: SellersComponent},
  { path: 'cart', component: CartComponent},
  { path: 'finance', component: FinanceComponent},
  { path: 'compendiums', component: CompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }