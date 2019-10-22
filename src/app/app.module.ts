import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ShopComponent } from './shop/shop.component';
import { StoreComponent } from './store/store.component';
import { SellersComponent } from './sellers/sellers.component';
import { CartComponent } from './cart/cart.component';
import { FinanceComponent } from './finance/finance.component';

import { CompComponent } from './comp/comp.component';
import { CompDefaultComponent } from './comp/comp.default.component';
import { CompCounteragentsComponent } from './comp/comp.counteragents.component';

import { SubmenuComponent } from './shared/submenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    ShopComponent,
    StoreComponent,
    SellersComponent,
    CartComponent,
    FinanceComponent,
    CompComponent,
    CompDefaultComponent,
    CompCounteragentsComponent,
    SubmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }