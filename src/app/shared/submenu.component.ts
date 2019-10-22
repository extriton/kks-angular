import { Input, Component } from '@angular/core';

@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent {
    @Input() submenuItems: any[];
}