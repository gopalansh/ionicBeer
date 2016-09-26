import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  templateUrl: 'detail.html',
  animations: [
    trigger('slideLeft', [
      state('in', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(100%)'}),
        animate('300ms, 600ms')
      ])
    ])
  ]
})
export class DetailPage {

  public beer: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams) { }

  ionViewDidLoad() {
    this.beer = this.params.get('data');
  }

  shareSite(website: string) {
    window.open(website);
  }

  call(phone: string) {
    window.open(`tel:${phone}`);
  }

  navigate(lat: string, long: string) {
    window.open(`https://maps.google.com/?q=${lat},${long}`);
  }

  shareBeer(name: string) {
    window.open(`http://twitter.com/share?text=I am drinking a ${name}!&hashtags=beerly`)
  }
}
