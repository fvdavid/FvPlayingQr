import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'fv-playing-qr-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page {

  fvListMenus = [
    {
      name: 'Nasi',
      imageUrl: 1
    },
    {
      name: 'Snack',
      imageUrl: 2
    },
    {
      name: 'Kopi',
      imageUrl: 3
    },
    {
      name: 'Teh',
      imageUrl: 4
    },
    {
      name: 'Jus',
      imageUrl: 5
    },
    {
      name: 'Lainnya',
      imageUrl: 6
    }
  ];

  constructor() {}

}
