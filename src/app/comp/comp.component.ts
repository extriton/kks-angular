import { Component } from '@angular/core';

@Component({
  selector: 'compendiums-page',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent {
  submenuItems: any[] = [
    {
      link: '/compendiums',
      iconClass: 'nomenclatures-icon',
      itemText: 'Номенклатуры',
    },
    {
      link: 'counteragents',
      iconClass: 'counteragents-icon',
      itemText: 'Контрагенты',
    },
  ];
}
