import { Component } from '@angular/core';
import { jeanMen } from '../../Data/Men/men_jeans';
import { gounsPage1 } from '../../Data/Gouns/gouns';

import { kurtaPage1 } from '../../Data/Kurta/kurta';
import { mensShoesPage1 } from '../../Data/shoes';
import { lehngacholiPage2 } from '../../Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menJeans: any;
  womenGouns: any;
  lenghacholi : any;
  mensKurta : any;
  mensShoes : any;


  ngOnInit() {
    this.menJeans = jeanMen.slice(0, 5);
    this.womenGouns = gounsPage1.slice(0, 5);
    this.mensKurta = kurtaPage1.slice(0, 5);
    this.lenghacholi = lehngacholiPage2.slice(0, 5);
    this.mensShoes = mensShoesPage1.slice(0, 5);

  }
}
