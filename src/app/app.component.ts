import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: any[] = [
    {
      link: '',
      iconClass: 'analytic-icon',
      itemText: 'Главная',
    },
    {
      link: 'orders',
      iconClass: 'orders-icon',
      itemText: 'Заказы',
    },
    {
      link: 'shop',
      iconClass: 'shop-icon',
      itemText: 'Магазин',
    },
    {
      link: 'store',
      iconClass: 'store-icon',
      itemText: 'Склад',
    },
    {
      link: 'sellers',
      iconClass: 'sellers-icon',
      itemText: 'Поставщики',
    },
    {
      link: 'cart',
      iconClass: 'cart-icon',
      itemText: 'Корзина',
    },
    {
      link: 'finance',
      iconClass: 'finance-icon',
      itemText: 'Финансы',
    },
    {
      link: 'compendiums',
      iconClass: 'comp-icon',
      itemText: 'Справочники',
    },
  ];
}
