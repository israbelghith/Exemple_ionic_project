import { Component, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('ionNav') ionNav: IonNav;
  constructor() {}
  go(){
    this.ionNav.push('ListLivrePage');
    }
}
